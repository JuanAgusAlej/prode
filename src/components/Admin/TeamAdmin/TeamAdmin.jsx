/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { getTeamsAll, createdTeamApi } from '../../../service/teamsApi';
import TeamTable from './TeamTable.jsx';

const TeamAdmin = () => {
  const { t } = useTranslation();
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

  const update = () => {
    setTeams({
      loading: true,
      data: teams,
    });
  };

  const teamsGet = async () => {
    const team = await getTeamsAll();
    setTeams({
      loading: false,
      data: team,
    });
  };

  useEffect(() => {
    if (teams.loading) {
      teamsGet();
    }
  }, [teams.loading]);

  const createdTeam = () => {
    MySwal.fire({
      title: 'Crear Team',
      html: `<input type="text" id='name'  class="swal2-input" placeholder="name">
              <input type="text" id='country'  class="swal2-input" placeholder="country">
              <input type="text"  id='logo'  class="swal2-input" placeholder="logo">
              <input type="text" id='shortName'  class="swal2-input" placeholder="shortName">
              `,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value;
        const country = Swal.getPopup().querySelector('#country').value;
        const logo = Swal.getPopup().querySelector('#logo').value;
        const shortName = Swal.getPopup().querySelector('#shortName').value;
        if (!name || !country || !logo || !shortName) {
          Swal.showValidationMessage('Completar los datos');
        }
        const dato = {
          name,
          country,
          logo,
          shortName,
        };
        return dato;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const info = await createdTeamApi(result.value);
        if (!info.error) {
          MySwal.fire('Creado', `${result.value.name}`, 'success').then(
            update(),
          );
        } else {
          MySwal.fire('Error', `${info.message}`, 'error');
        }
      }
    });
  };
  return (
    <>
      <table className="table m-5">
        <thead>
          <button
            type="button"
            className="btn btn-success m-0 p-0 bi bi-plus"
            style={{ fontSize: 16 }}
            onClick={() => createdTeam()}
          >
            {t('team')}
          </button>
          <tr>
            <th scope="col-4">Logo</th>
            <th scope="col-4">{t('name')}</th>
            <th scope="col-4">{t('shortName')}</th>
            <th scope="col-4">{t('country')}</th>
          </tr>
        </thead>
        <tbody>
          {teams.loading ? (
            <p>{t('loading')}</p>
          ) : (
            teams.data.map((team) => (
              <TeamTable key={team._id} team={team} update={update} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default TeamAdmin;
