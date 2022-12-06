/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { useModal } from '../../../hooks/useModal';
import { getTournamentsAll } from '../../../service/tournamentApi';
import TourmamentTable from './TourmamentTable.jsx';
import TournamentsModal from './TournamentsModal.jsx';

const TournamentAdmin = () => {
  const { t } = useTranslation();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const [tournaments, setTournaments] = useState({
    loading: true,
    data: [],
  });

  const update = () => {
    setTournaments({
      loading: true,
      data: tournaments,
    });
  };

  const teamsGet = async () => {
    const team = await getTournamentsAll();
    setTournaments({
      loading: false,
      data: team,
    });
  };

  useEffect(() => {
    if (tournaments.loading) {
      teamsGet();
    }
  }, [tournaments.loading]);
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    openModal();
  };
  return (
    <div onClick={closeModal}>
      <table className="table m-5 ">
        <thead>
          <button
            type="button"
            className="btn btn-success px-2 py-0 bi bi-plus"
            style={{ fontSize: 16, width: 'auto' }}
            onClick={handleModalContainerClick}>
            {t('tournaments')}
          </button>
          <tr>
            <th>{t('name')}</th>
            <th>{t('predictionPoints')}</th>
            <th>{t('predictionGoalsPoints')}</th>
            <th>{t('region')}</th>
            <th>{t('prizes')}</th>
            <th>{t('teams')}</th>
            <th>{t('state')}</th>
          </tr>
        </thead>
        <tbody className="justify-content-end">
          {tournaments.loading ? (
            <p>{t('loading')}</p>
          ) : (
            tournaments.data.map((tournament) => (
              <TourmamentTable
                key={tournament._id}
                tourmament={tournament}
                update={update}
              />
            ))
          )}
        </tbody>
      </table>
      <div onClick={handleModalContainerClick}>
        <TournamentsModal
          isOpen={isOpenModal}
          closeModal={closeModal}
          update={update}
        />
      </div>
    </div>
  );
};

export default TournamentAdmin;
