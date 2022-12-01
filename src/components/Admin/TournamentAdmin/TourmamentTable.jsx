/* eslint-disable no-underscore-dangle */
import React from 'react';
import Swal from 'sweetalert2';
import ButtonsTeamTable from '../../../commons/Buttons/ButtonsTeamTable.jsx';
import {
  deleteTournamentsApi,
  editTournamentsApi,
} from '../../../service/tournamentApi';

const TourmamentTable = ({ tourmament, update }) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });
  const editTournament = (propiety) => {
    const type = propiety === 'predictionGoalsPoints'
      || propiety === 'predictionResultPoints'
      ? 'number'
      : 'text';
    MySwal.fire({
      title: `Cambiar ${propiety}`,
      html: `<input type=${type} id=${propiety} autocomplete="nope"  class="swal2-input" placeholder=${propiety}>`,
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
        tourmament[propiety] = result.value;
        editTournamentsApi(tourmament._id, tourmament);
        update();
      }
    });
  };
  const deleteTournament = () => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `Eliminar el Team ${tourmament.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteTournamentsApi(tourmament._id);
        update();
      }
    });
  };
  return (
    <tr>
      <td>
        {tourmament.name}
        <ButtonsTeamTable action={editTournament} objectKey="name" />
      </td>
      <td className="col-1">
        {tourmament.predictionResultPoints}
        <ButtonsTeamTable
          action={editTournament}
          objectKey="predictionResultPoints"
        />
      </td>
      <td className="col-1">
        {tourmament.predictionGoalsPoints}
        <ButtonsTeamTable
          action={editTournament}
          objectKey="predictionGoalsPoints"
        />
      </td>
      <td>
        {tourmament.region}
      </td>
      <td className="">
        <ul className="list-unstyled">
          <li>
            <button
              type="button"
              className="btn btn-success m-0 p-0"
              style={{ fontSize: 16 }}>
              Add Prize
            </button>
          </li>
          {tourmament.prizes?.map((prize, i) => (
            <li className="mt-2" key={i}>
              {prize.prize}
              <button
                type="button"
                className="btn btn-link p-0"
                style={{
                  width: 25,
                  height: 25,
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 5,
                }}>
                <i className="bi bi-pencil-square"></i>
              </button>
            </li>
          ))}
        </ul>
      </td>
      <td className="">
        <ul className="list-unstyled">
          <li>
            <button
              type="button"
              className="btn btn-success m-0 p-0"
              style={{ fontSize: 16 }}>
              Add Team
            </button>
          </li>
          {tourmament.teamsId?.map((team, i) => (
            <li className="mt-2" key={i}>
              {team.name}
              <button
                type="button"
                className="btn btn-link p-0"
                style={{
                  width: 25,
                  height: 25,
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 5,
                }}>
                <i className="bi bi-pencil-square"></i>
              </button>
            </li>
          ))}
        </ul>
      </td>
      <td>{!tourmament.finished ? <p>En curso</p> : <p>Finalizado</p>}</td>
      <td className="col-2">
        {!tourmament.finished ? (
          <button
            type="button"
            className="btn btn-success m-0 p-0"
            style={{ fontSize: 16 }}>
            Finish
          </button>
        ) : (
          <></>
        )}
        <button
          type="button"
                  className="btn btn-danger p-0"
                  onClick={() => deleteTournament()}
          style={{ width: 50, fontSize: 20, marginLeft: 20 }}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TourmamentTable;
