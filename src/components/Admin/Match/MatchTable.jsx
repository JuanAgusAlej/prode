/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import Swal from 'sweetalert2';
import { deleteMatch } from '../../../service/matchAdminApi';
import ButtonsMatchTable from './ButtonsMatchTable.jsx';

const MatchTable = ({ tournament, match, setUpdate, editMatch }) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });

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
      <td>
        {tournament.name}
        <ButtonsMatchTable
          action={editMatch}
          objectKey="Tournament"
          popupTitle="Change tournament"
        />
      </td>
      <td>
        {new Date(match.date).toLocaleString(navigator.language)}
        <ButtonsMatchTable
          action={editMatch}
          objectKey="Date"
          popupTitle="Change date"
        />
      </td>
      <td>
        <img
          src={match.teamAId.logo}
          alt={match.teamAId.shortName}
          width="30"
        />
        &nbsp;
        {match.teamAId.shortName}
        <ButtonsMatchTable
          action={editMatch}
          objectKey="Local"
          popupTitle="Change local team"
        />
      </td>
      <td>
        <img
          src={match.teamBId.logo}
          alt={match.teamBId.shortName}
          width="30"
        />
        &nbsp;
        {match.teamBId.shortName}
        <ButtonsMatchTable
          action={editMatch}
          objectKey="Visitor"
          popupTitle="Change visitor team"
        />
      </td>
      <td>
        {match.instance}
        <ButtonsMatchTable
          action={editMatch}
          objectKey="Instance"
          popupTitle="Change instance"
        />
      </td>
      <td className="col-2">
        {match.result === 'PENDING' ? (
          <button
            type="button"
            className="btn btn-success m-0 p-0"
            style={{ fontSize: 16 }}
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
