/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import Swal from 'sweetalert2';
import { deleteMatch, setMatchResults } from '../../../service/matchAdminApi';
import './MatchTable.css';

const MatchTable = ({ tournament, match, setUpdate, editMatch }) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
      htmlContainer: 'setResults',
    },
    buttonsStyling: false,
  });

  const setResults = () => {
    MySwal.fire({
      title: 'Set match results',
      html: `<div>
                <div class="goalsInput">
                  <label for="local-goals"><img src=${match.teamAId.logo} width="34" /><b>${match.teamAId.shortName}</b></label>
                  <input id="local-goals" type="number" min="0" class="swal2-input" placeholder="0"/>
                </div>
                <div class="goalsInput">
                  <label for="visitor-goals"><img src=${match.teamBId.logo} width="34" /><b>${match.teamBId.shortName}</b></label>
                  <input id="visitor-goals" type="number" min="0" class="swal2-input" placeholder="0"/>
                </div>
              </div>`,
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'Set results',
      preConfirm: () => {
        const goalsA = Swal.getPopup().querySelector('#local-goals').value;
        const goalsB = Swal.getPopup().querySelector('#visitor-goals').value;
        if (!goalsA || !goalsA) {
          return Swal.showValidationMessage('Please complete all fields');
        }
        if (goalsA < 0 || goalsB < 0) {
          return Swal.showValidationMessage(
            'Goals cannot be a negative number'
          );
        }
        const data = {
          goalsA,
          goalsB,
        };
        return data;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await setMatchResults(
          tournament._id,
          match._id,
          result.value.goalsA,
          result.value.goalsB
        );
        setUpdate(`${match._id}-${Math.random()}`);
      }
    });
  };

  const deleteTeam = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete match ${match.teamAId.shortName}-${match.teamBId.shortName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteMatch(tournament._id, match._id);
        setUpdate(`${match._id}-${Math.random()}`);
      }
    });
  };

  return (
    <tr>
      <td>{tournament.name}</td>
      <td>{new Date(match.date).toLocaleString(navigator.language)}</td>
      <td>
        <img
          src={match.teamAId.logo}
          alt={match.teamAId.shortName}
          width="30"
        />
        &nbsp;
        {match.teamAId.shortName}
      </td>
      <td>
        <img
          src={match.teamBId.logo}
          alt={match.teamBId.shortName}
          width="30"
        />
        &nbsp;
        {match.teamBId.shortName}
      </td>
      <td>{match.instance}</td>
      <td className="col-2">
        {match.result === 'PENDING' ? (
          <button
            type="button"
            className="btn btn-success m-0 p-0"
            style={{ fontSize: 16 }}
            onClick={setResults}
          >
            Set result
          </button>
        ) : (
          <span>{`${match.goalsA}-${match.goalsB}`}</span>
        )}
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger p-0"
          style={{ width: 50, fontSize: 20, marginLeft: 20 }}
          onClick={deleteTeam}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default MatchTable;
