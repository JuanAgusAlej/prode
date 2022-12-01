/* eslint-disable no-underscore-dangle */
import React from 'react';
import Swal from 'sweetalert2';
import ButtonsTeamTable from '../../../commons/Buttons/ButtonsTeamTable.jsx';
import { deleteTeamApi, editTeamApi } from '../../../service/teamsApi';

const TeamTable = ({ team, update }) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });
  const editTeam = (propiety) => {
    MySwal.fire({
      title: `Cambiar ${propiety}`,
      html: `<input type="text" id=${propiety} autocomplete="nope"  class="swal2-input" placeholder=${propiety}>`,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const genre = Swal.getPopup().querySelector(`#${propiety}`).value;
        if (!genre) {
          Swal.showValidationMessage('Completar los datos');
        }
        return genre;
      },
    }).then(async (result) => {
      console.log(result);
      if (result.value) {
        team[propiety] = result.value;
        editTeamApi(team._id, team);
        update();
      }
    });
  };
  const deleteTeam = () => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `Eliminar el Team ${team.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteTeamApi(team._id);
        update();
      }
    });
  };
  return (
    <tr>
      <td>
        <img src={team.logo} style={{ maxWidth: 50 }}></img>
        <ButtonsTeamTable action={editTeam} objectKey="logo" />
      </td>
      <td>
        {team.name}
        <ButtonsTeamTable action={editTeam} objectKey="name" />
      </td>
      <td>
        {team.shortName}
        <ButtonsTeamTable action={editTeam} objectKey="shortName" />
      </td>
      <td>
        {team.country}
        <ButtonsTeamTable action={editTeam} objectKey="country" />
      </td>
      <td className="col-2">
        <button
          type="button"
          className="btn btn-danger m-0 p-0"
          style={{ width: 50, fontSize: 20 }}
          onClick={() => deleteTeam()}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TeamTable;
