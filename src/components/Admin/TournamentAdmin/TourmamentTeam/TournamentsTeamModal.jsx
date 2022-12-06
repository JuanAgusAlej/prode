/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getTeamsAll } from '../../../../service/teamsApi';
import {
  createdTournamentsApi,
  editTournamentsApi,
} from '../../../../service/tournamentApi';
import TeamList from './TeamList.jsx';
import './tournamentsTeamModal.css';

const TournamentsTeamModal = ({
  isOpen, closeModal, update, tournament,
}) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });
  const [teams, setTeams] = useState({
    loading: true,
    data: [],
  });

  const [data, setData] = useState(tournament);

  const teamData = async (teamsId) => {
    const teamsTour = await getTeamsAll();
    const dataTeams = teamsTour.map((teamTour) => {
      const findTeam = teamsId.find((teamId) => teamId._id === teamTour._id);
      if (!findTeam) {
        teamTour.active = false;
      } else {
        teamTour.active = true;
      }
      return teamTour;
    });
    setTeams({
      loading: false,
      data: dataTeams,
    });
  };
  const addTeam = (teamSelect) => {
    const addTeamTour = data.teamsId.find(team => team._id === teamSelect._id);
    if (!addTeamTour) {
      data.teamsId.push(teamSelect);
      teamData(data.teamsId);
    } else {
      const removeTeam = data.teamsId.filter(team => team._id !== teamSelect._id);
      data.teamsId = removeTeam;
      teamData(removeTeam);
    }
    console.log(data.teamsId);
  };
  const editTournament = async () => {
    console.log('asdasdasd');
    // const dataTeamId = data.teamsId.map((dataTeam) => dataTeam._id);
    // data.teamsId = dataTeamId;
    try {
      await editTournamentsApi(data._id, data);
      MySwal.fire(
        'Guardado',
        'Se guardaron correctamente los equipos editados',
        'success',
      ).then(update());
      closeModal();
    } catch (error) {
      MySwal.fire(
        'Se produjo un Error',
        `${error}`,
        'error',
      );
    }
  };
  const close = () => {
    update();
    closeModal();
  };
  useEffect(() => {
    teamData(tournament.teamsId);
  }, []);

  return (
    <div className={` modal ${isOpen && 'is-open'}`}>
      <div>
        <ul className="container row list-unstyled">
          {teams.loading ? (
            <p>Loading</p>
          ) : (
            teams.data.map((team) => (
              <TeamList key={team._id} team={team} addTeam={addTeam} />
            ))
          )}
        </ul>
        <div className="d-flex justify-content-evenly ">
          <button
            type="button"
            style={{ width: 'auto', marginTop: 15 }}
            className="btn btn-success py-0  "
            onClick={editTournament}>
            Guardar
          </button>
          <button
            type="button"
            style={{ width: 'auto', marginTop: 15 }}
            className="btn btn-warning py-0  "
            onClick={() => close()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentsTeamModal;
