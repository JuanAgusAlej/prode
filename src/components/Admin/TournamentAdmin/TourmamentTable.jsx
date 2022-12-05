/* eslint-disable no-underscore-dangle */
import React from 'react';
import Swal from 'sweetalert2';
import ButtonsTeamTable from '../../../commons/Buttons/ButtonsTeamTable.jsx';
import { useModal } from '../../../hooks/useModal';
import {
  deleteTournamentsApi,
  editTournamentsApi,
} from '../../../service/tournamentApi';
import TournamentsTeamModal from './TourmamentTeam/TournamentsTeamModal.jsx';

const TourmamentTable = ({ tourmament, update }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });

  const editPrizer = (propiety, rating) => {
    const listRating = tourmament[propiety].map((prize) => prize.position);
    MySwal.fire({
      title: `Cambiar ${propiety}`,
      html: `
      <h5>Position</h5>
      <input type=Number id=position autocomplete="nope"  class="swal2-input mt-1" placeholder=Position value=${tourmament[propiety][rating].position}>
      <h5>Prize</h5>
      <input type=text id=prize autocomplete="nope"  class="swal2-input mt-1" placeholder=Prize value=${tourmament[propiety][rating].prize}>
      <h5>Image</h5>
      <img src=${tourmament[propiety][rating].img} class="img-thumbnail"/>
      <input type=text id=img autocomplete="nope"  class="swal2-input mt-1" placeholder=Imgage value=${tourmament[propiety][rating].img}>`,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const position = Swal.getPopup().querySelector('#position').value;
        const prize = Swal.getPopup().querySelector('#prize').value;
        const img = Swal.getPopup().querySelector('#img').value;
        const positionPrize = listRating.includes(position);
        if (!position || !prize || !img) {
          Swal.showValidationMessage('Completar los datos');
        } else if (positionPrize) {
          Swal.showValidationMessage('Ese puesto ya tiene premio asignado');
        } else if (position < 1) {
          Swal.showValidationMessage('El puesto no puede ser menor que 1');
        }
        const data = {
          position,
          prize,
          img,
        };
        return data;
      },
    }).then(async (result) => {
      if (result.value) {
        tourmament[propiety][rating] = result.value;
        await editTournamentsApi(tourmament._id, tourmament);
        update();
      }
    });
  };
  const addPrizer = (propiety) => {
    const listRating = tourmament[propiety].map((prize) => prize.position);
    const data = {};
    MySwal.fire({
      title: `Cambiar ${propiety}`,
      html: `
      <h5>Position</h5>
      <input type=Number id=position autocomplete="nope"  class="swal2-input mt-1" placeholder=Position >
      <h5>Prize</h5>
      <input type=text id=prize autocomplete="nope"  class="swal2-input mt-1" placeholder=Prize >
      <h5>Image</h5>
      <input type=text id=img autocomplete="nope"  class="swal2-input mt-1" placeholder=Imgage >`,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        data.position = Swal.getPopup().querySelector('#position').value;
        data.prize = Swal.getPopup().querySelector('#prize').value;
        data.img = Swal.getPopup().querySelector('#img').value;
        const positionPrize = listRating.includes(data.position);
        if (!data.position || !data.prize || !data.img) {
          Swal.showValidationMessage('Completar los datos');
        } else if (positionPrize) {
          Swal.showValidationMessage('Ese puesto ya tiene premio asignado');
        } else if (data.position < 1) {
          Swal.showValidationMessage('El puesto no puede ser menor que 1');
        }
      },
    }).then((result) => {
      if (!result.value) {
        return;
      }
      MySwal.fire({
        title: 'Estas seguro?',
        html: `
        <p>Position: ${data.position}</p>
        <p>Prize: ${data.prize}</p>
        <img src=${data.img} class="img-thumbnail"/>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF3270',
        cancelButtonColor: '#12a696',
        confirmButtonText: 'yeah, do it!',
      }).then(async (confirm) => {
        if (confirm.isConfirmed) {
          tourmament[propiety].push(data);
          await editTournamentsApi(tourmament._id, tourmament);
          update();
        }
      });
    });
  };
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
      if (result.value) {
        tourmament[propiety] = result.value;

        await editTournamentsApi(tourmament._id, tourmament);
        update();
      }
    });
  };
  const endTournament = () => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `De finalizar el Torneo ${tourmament.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        tourmament.finished = true;
        await editTournamentsApi(tourmament._id, tourmament);
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
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    openModal();
  };
  return (
    <>
    <tr>
      <td>
        {tourmament.name}
        {
          !tourmament.finished ? (
            <ButtonsTeamTable action={editTournament} objectKey="name" />
          ) : (<></>)
        }
      </td>
      <td className="col-1">
        {tourmament.predictionResultPoints}
        {
          !tourmament.finished ? (
        <ButtonsTeamTable
          action={editTournament}
          objectKey="predictionResultPoints"
        />) : (<></>)
      }
      </td>
      <td className="col-1">
        {tourmament.predictionGoalsPoints}
        {
          !tourmament.finished ? (
        <ButtonsTeamTable
          action={editTournament}
          objectKey="predictionGoalsPoints"
        />) : (<></>)
      }
      </td>
      <td>{tourmament.region}</td>
      <td className="">
        <ul className="list-unstyled">
          <li>
          {
          !tourmament.finished ? (
        <button
              type="button"
              className="btn btn-success m-0 p-0"
              onClick={() => addPrizer('prizes')}
              style={{ fontSize: 16 }}>
              Add Prize
            </button>) : (<></>)
              }
          </li>
          {tourmament.prizes?.map((prize, i) => (
            <li className="mt-2" key={i}>
              {prize.position} - {prize.prize}
              {
                !tourmament.finished ? (
              <ButtonsTeamTable
                action={editPrizer}
                objectKey="prizes"
                position={i}
              />) : (<></>)
            }
            </li>
          ))}
        </ul>
      </td>
      <td className="">
        <ul className="list-unstyled">
          <li>
            {
              !tourmament.finished ? (
                <button
                  type="button"
            className="btn btn-success m-0 p-0"
            onClick={handleModalContainerClick}
                  style={{ fontSize: 16 }}>
                  Edit Team
                </button>
              ) : (<></>)
            }
          </li>
          {tourmament.teamsId?.map((team) => (
            <li className="mt-2" key={team._id}>
              {team.name}
            </li>
          ))}
        </ul>
      </td>
      <td>{!tourmament.finished ? <p>En curso</p> : <p>Finalizado</p>}</td>
      <td className="col-2">
        {!tourmament.finished ? (
          <button
            type="button"
            onClick={() => endTournament()}
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
    <div>
    <TournamentsTeamModal
      isOpen={isOpenModal}
      closeModal={closeModal}
          update={update}
          tournament={tourmament}
    />
  </div>
    </>
  );
};

export default TourmamentTable;
