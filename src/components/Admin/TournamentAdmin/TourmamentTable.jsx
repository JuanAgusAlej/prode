/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { changeLanguage } from 'i18next';
import React from 'react';
import Swal from 'sweetalert2';
import ButtonsTeamTable from '../../../commons/Buttons/ButtonsTeamTable.jsx';
import { useModal } from '../../../hooks/useModal';
import {
  deleteTournamentsApi,
  editTournamentsApi,
} from '../../../service/tournamentApi';
import TournamentsTeamModal from './TourmamentTeam/TournamentsTeamModal.jsx';
// import './modal.css';

const TourmamentTable = ({ tourmament, update }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });
  const MySwalAddPrize = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    width: 'fit-content',
    buttonsStyling: false,
  });

  const editPrizer = (propiety, rating) => {
    MySwal.fire({
      title: `Cambiar ${propiety}`,
      html: `
      <h5>Position: ${tourmament[propiety][rating].position}</h5>
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
        if (!position || !prize || !img) {
          Swal.showValidationMessage('Completar los datos');
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
    const data = [];
    MySwalAddPrize.fire({
      title: `Cambiar ${propiety}`,
      html: `
      <div class="container">
  <div class="row">
    <div class="col">
    <h5>Position: 1</h5>
    <h5>Prize</h5>
    <input type=text id=prize0 autocomplete="nope"  class="swal2-input mt-1" placeholder=Prize >
    <h5>Image</h5>
    <input type=text id=img0 autocomplete="nope"  class="swal2-input mt-1" placeholder=Imgage >
    </div>
    <div class="col">
    <h5>Position: 2</h5>
    <h5>Prize</h5>
    <input type=text id=prize1 autocomplete="nope"  class="swal2-input mt-1" placeholder=Prize >
    <h5>Image</h5>
    <input type=text id=img1 autocomplete="nope"  class="swal2-input mt-1" placeholder=Imgage >
    </div>
    <div class="col">
    <h5>Position: 3</h5>
    <h5>Prize</h5>
    <input type=text id=prize2 autocomplete="nope"  class="swal2-input mt-1" placeholder=Prize >
    <h5>Image</h5>
    <input type=text id=img2 autocomplete="nope"  class="swal2-input mt-1" placeholder=Imgage >
    
    </div>
  </div>
</div>
      `,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        for (let index = 0; index < 3; index++) {
          const info = {
            position: index + 1,
            prize: Swal.getPopup().querySelector(`#prize${index}`).value,
            img: Swal.getPopup().querySelector(`#img${index}`).value,
          };
          data.push(info);
        }
        if (!data[0].prize || !data[0].img || !data[1].prize || !data[1].img || !data[2].prize || !data[2].img) {
          Swal.showValidationMessage('Completar los datos');
        }
      },
    }).then((result) => {
      if (!result.value) {
        return;
      }
      MySwalAddPrize.fire({
        title: 'Estas seguro?',
        html: `
        <div class="container">
        <div class="row">
          <div class="col">      
        <p>Position: ${data[0].position}</p>
        <p>Prize: ${data[0].prize}</p>
        <img src=${data[0].img} class="img-thumbnail"/>
        </div>
        <div class="offset-1 col">      
        <p>Position: ${data[1].position}</p>
        <p>Prize: ${data[1].prize}</p>
        <img src=${data[1].img} class="img-thumbnail"/>
        </div>
        <div class="offset-1 col">      
        <p>Position: ${data[2].position}</p>
        <p>Prize: ${data[2].prize}</p>
        <img src=${data[2].img} class="img-thumbnail"/>
        </div>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF3270',
        cancelButtonColor: '#12a696',
        confirmButtonText: 'yeah, do it!',
      }).then(async (confirm) => {
        if (confirm.isConfirmed) {
          tourmament[propiety] = data;
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
          {!tourmament.finished ? (
            <ButtonsTeamTable action={editTournament} objectKey="name" />
          ) : (
            <></>
          )}
        </td>
        <td className="col-1">
          {tourmament.predictionResultPoints}
          {!tourmament.finished ? (
            <ButtonsTeamTable
              action={editTournament}
              objectKey="predictionResultPoints"
            />
          ) : (
            <></>
          )}
        </td>
        <td className="col-1">
          {tourmament.predictionGoalsPoints}
          {!tourmament.finished ? (
            <ButtonsTeamTable
              action={editTournament}
              objectKey="predictionGoalsPoints"
            />
          ) : (
            <></>
          )}
        </td>
        <td>{tourmament.region}</td>
        <td className="">
          <ul className="list-unstyled">
            <li>
              {!tourmament.finished && tourmament.prizes.length < 1 ? (
                <button
                  type="button"
                  className="btn btn-success m-0 p-0"
                  onClick={() => addPrizer('prizes')}
                  style={{ fontSize: 16 }}>
                  Add Prize
                </button>
              ) : (
                <></>
              )}
            </li>
            {tourmament.prizes?.map((prize, i) => (
              <li className="mt-2" key={i}>
                {prize.position} - {prize.prize}
                {!tourmament.finished ? (
                  <ButtonsTeamTable
                    action={editPrizer}
                    objectKey="prizes"
                    position={i}
                  />
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </td>
        <td className="">
          <ul className="list-unstyled">
            <li>
              {!tourmament.finished && tourmament.matchesId.length < 1 ? (
                <button
                  type="button"
                  className="btn btn-success m-0 p-0"
                  onClick={handleModalContainerClick}
                  style={{ fontSize: 16 }}>
                  Edit Team
                </button>
              ) : (
                <></>
              )}
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
