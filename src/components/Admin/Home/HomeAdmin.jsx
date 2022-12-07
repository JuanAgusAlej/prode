import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getMetrics } from '../../../service/metrics';
import './homeAdmin.css';
import KpiCard from './KpiCard/KpiCard.jsx';
import TotalCard from './TotalCard/TotalCard.jsx';

const HomeAdmin = () => {
  const { t } = useTranslation();
  const [metrics, setMetrics] = useState({});

  const getAllMetrics = async () => {
    const allMetrics = await getMetrics();
    setMetrics(allMetrics);
  };

  useEffect(() => {
    getAllMetrics();
  }, []);
  if (!metrics?.total) {
    return <h4 style={{ padding: '20px' }}>{t('loading')}.</h4>;
  }
  const metricsObject = {
    total: [
      {
        main: {
          count: metrics.total.users.total,
          description: t('totalRegistered'),
        },
        list: [
          `${metrics.total.users.activeToday} ${t('usersActiveToday')}`,
          `${metrics.total.users.activeYesterday} ${t('usersActiveYesterday')}`,
          `${metrics.total.users.blocked} ${t('usersBlocked')}`,
        ],
      },
      {
        main: {
          count: metrics.total.tournaments.total,
          description: t('tournamentsCreated'),
        },
        list: [
          `${metrics.total.tournaments.active} ${t('tournamentsActive')}`,
          `${metrics.total.tournaments.finished} ${t('tournamentsFinished')}`,
        ],
      },
      {
        main: {
          count: metrics.total.matches.total,
          description: t('matchesCreated'),
        },
        list: [
          `${metrics.total.matches.active} ${t('matchesActive')}`,
          `${metrics.total.matches.finished} ${t('matchesFinished')}`,
        ],
      },
      {
        main: {
          count: metrics.total.predictions.total,
          description: t('predictionsCreated'),
        },
        list: [
          `${metrics.total.predictions.pending} ${t('predictionsPending')}`,
          `${metrics.total.predictions.won} ${t('predictionsWinning')}`,
          `${metrics.total.predictions.loss} ${t('predictionsLosing')}`,
        ],
      },
      {
        main: {
          count: metrics.total.notifications.total,
          description: t('notificationsTotal'),
        },
        list: [
          `${metrics.total.notifications.push} ${t('notificationsPush')}`,
          `${metrics.total.notifications.email} ${t('notificationsEmail')}`,
        ],
      },
    ],
    kpi: [
      {
        count: metrics.kpi.userPermanence,
        description: t('userPermanence'),
      },
      {
        count: metrics.kpi.pageviewsPerUser,
        description: t('pageviews'),
      },
      {
        count: metrics.kpi.predictionsWinRate,
        description: t('predictionsWinrate'),
      },
      {
        count: metrics.kpi.predictionsPerUser,
        description: t('predictionsPerUser'),
      },
      {
        count: metrics.kpi.pushNotificationsPerUser,
        description: t('notificationsPushPerUser'),
      },
      {
        count: metrics.kpi.emailNotificationsPerUser,
        description: t('notificationsEmailPerUser'),
      },
    ],
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        {metricsObject.kpi.map((kpi, index) => (
          <KpiCard key={index} data={kpi} />
        ))}
      </div>

      <div className="row">
        {metricsObject.total.map((data, index) => (
          <TotalCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeAdmin;
