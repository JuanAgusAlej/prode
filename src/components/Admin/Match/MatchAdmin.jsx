/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import MatchTable from './MatchTable.jsx';
import { getTournamentsAll } from '../../../service/tournamentApi';
import { addMatch } from '../../../service/matchAdminApi';

const MatchAdmin = () => {
  const [tournaments, setTournaments] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamASelect, setTeamASelect] = useState('');
  const [teamBSelect, setTeamBSelect] = useState('');
  const [update, setUpdate] = useState('');
  const { t } = useTranslation();

  const getTournaments = async () => {
    const data = await getTournamentsAll();
    setTournaments(data);
    setTeams(data.teamsId);
  };

  const handleChangeTournament = (e) => {
    const tournamentId = e.target.value;
    if (tournamentId === '') return setTeams('');
    const tournamentTeams = tournaments.find(
      (tournament) => tournament._id === tournamentId
    ).teamsId;
    console.log(tournamentTeams);
    setTeams(tournamentTeams);
  };

  const teamOptions = (defaultText) => {
    let teamHTML = `<option value="">${defaultText}</option>`;
    if (teams) {
      teams.forEach((team) => {
        teamHTML += `<option value="${team._id}">${team.name}</option>`;
      });
    }
    return teamHTML;
  };

  useEffect(() => {
    getTournaments();
  }, [update]);

  useEffect(() => {
    if (teamASelect) {
      teamASelect.innerHTML = teamOptions('Select local team');
      teamBSelect.innerHTML = teamOptions('Select visitor team');
    }
  }, [teams]);

  const tournamentsOptions = () => {
    let tournamentHTML = '<option value="">Select a tournament</option>';
    tournaments.forEach((tournament) => {
      tournamentHTML += `<option value="${tournament._id}">${tournament.name}</option>`;
    });
    return tournamentHTML;
  };

  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });

  const handleNewMatch = () => {
    const tournamentsHTML = tournamentsOptions();
    MySwal.fire({
      title: 'Create new match',
      html: `<div style="display: flex; flex-direction: column">
              <select id='tournament' class="swal2-input">${tournamentsHTML}</select>
              <input type="datetime-local" id='date' class="swal2-input">
              <select id='teamA' class="swal2-input"><option value=''>Select local team</option></select>
              <select id='teamB' class="swal2-input"><option value=''>Select visitor team</option></select>
              <input type="text"  id='instance'  class="swal2-input" placeholder="Instance">
             </div>
              `,
      focusConfirm: false,
      confirmButtonText: 'Create',
      didOpen: () => {
        Swal.getPopup()
          .querySelector('#tournament')
          .addEventListener('change', handleChangeTournament);
        setTeamASelect(Swal.getPopup().querySelector('#teamA'));
        setTeamBSelect(Swal.getPopup().querySelector('#teamB'));
      },
      preConfirm: () => {
        const tournament = Swal.getPopup().querySelector('#tournament').value;
        const date = Swal.getPopup().querySelector('#date').value;
        const teamA = Swal.getPopup().querySelector('#teamA');
        const teamB = Swal.getPopup().querySelector('#teamB');
        const teamAId = teamA.value;
        const teamBId = teamB.value;
        const instance = Swal.getPopup().querySelector('#instance').value;
        if (!tournament || !date || !teamAId || !teamBId || !instance) {
          return Swal.showValidationMessage('Please complete all fields');
        }
        if (teamAId === teamBId) {
          console.log(teamA);
          return Swal.showValidationMessage(
            'Local team cannot be the same as the Visitor team'
          );
        }
        const data = {
          tournament,
          date: new Date(date).toISOString(),
          teamAId,
          teamBId,
          instance,
        };
        return data;
      },
    }).then(async (result) => {
      console.log(result);
      if (result.isConfirmed) {
        try {
          const match = await addMatch(result.value.tournament, result.value);
          console.log('Match: ', match);
          if (!match.errors) {
            MySwal.fire('Success', 'Match has been created', 'success').then(
              setUpdate(`${match._id}-${Math.random()}`)
            );
          } else {
            throw new Error(match.errors[0].msg);
          }
        } catch (e) {
          console.log('Error: ', e);
          MySwal.fire('Error', `${e.message}`, 'error');
        }
      }
    });
  };

  const editMatch = (property, popupTitle) => {
    let input;

    if (property === 'Tournament') {
      const tournamentsHTML = tournamentsOptions();
      input = `<select id='Tournament' class="swal2-input">${tournamentsHTML}</select>`;
    } else if (property === 'Date') {
      input = `<input type="datetime-local" id=${property} class="swal2-input">`;
    } else if (property === 'Local') {
      input = '<select id=\'localEdit\' class="swal2-input"><option value=\'\'>Select local team</option></select>';
    } else if (property === 'Visitor') {
      input = '<select id=\'visitorEdit\' class="swal2-input"><option value=\'\'>Select visitor team</option></select>';
    } else if (property === 'Instance') {
      input = `<input type="text" id='instanceEdit' autocomplete="nope"  class="swal2-input" placeholder=${property}>`;
    }

    MySwal.fire({
      title: `${popupTitle}`,
      html: input,
      focusConfirm: false,
      confirmButtonText: 'Change',
      preConfirm: () => {
        const { value } = Swal.getPopup().querySelector(`#${property}`);
        if (!value) {
          Swal.showValidationMessage('Completar los datos');
        }
        return value;
      },
    }).then(async (result) => {
      console.log(result);
      if (result.value) {
        /* team[property] = result.value;
        editTeamApi(team._id, team);
        update(); */
      }
    });
  };

  return (
    <table className="table m-5">
      <thead>
        <button
          type="button"
          className="btn btn-success m-0 p-0 bi bi-plus"
          style={{ fontSize: 16 }}
          onClick={handleNewMatch}
        >
          Match
        </button>
        <tr>
          <th>Tournament</th>
          <th>{t('date')}</th>
          <th>{t('home2')}</th>
          <th>{t('away')}</th>
          <th>{t('instance')}</th>
          <th>{t('result')}</th>
        </tr>
      </thead>
      <tbody className="justify-content-end">
        {tournaments.map((tournament) => {
          return tournament.matchesId.map((match) => {
            return (
              <MatchTable
                key={match._id}
                tournament={tournament}
                match={match}
                setUpdate={setUpdate}
                editMatch={editMatch}
              />
            );
          });
        })}
      </tbody>
    </table>
  );
};

export default MatchAdmin;
