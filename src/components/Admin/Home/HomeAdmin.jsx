import React, { useEffect, useState } from 'react';
import { getMetrics } from '../../../service/metrics';
import './homeAdmin.css';
import KpiCard from './KpiCard/KpiCard.jsx';
import TotalCard from './TotalCard/TotalCard.jsx';

const HomeAdmin = () => {
  const [metrics, setMetrics] = useState({});

  const getAllMetrics = async () => {
    const allMetrics = await getMetrics();
    setMetrics(allMetrics);
  };

  useEffect(() => {
    getAllMetrics();
  }, []);
  if (!metrics?.total) {
    return <h4 style={{ padding: '20px' }}>Loading metrics...</h4>;
  }
  const metricsObject = {
    total: [
      {
        main: {
          count: metrics.total.users.total,
          description: 'Total registered users',
        },
        list: [
          `${metrics.total.users.activeToday} users active today`,
          `${metrics.total.users.activeYesterday} users active yesterday`,
          `${metrics.total.users.blocked} users blocked`,
        ],
      },
      {
        main: {
          count: metrics.total.tournaments.total,
          description: 'Total tournaments created',
        },
        list: [
          `${metrics.total.tournaments.active} tournaments active`,
          `${metrics.total.tournaments.finished} tournaments finished`,
        ],
      },
      {
        main: {
          count: metrics.total.matches.total,
          description: 'Total matches created',
        },
        list: [
          `${metrics.total.matches.active} matches active`,
          `${metrics.total.matches.finished} matches finished`,
        ],
      },
      {
        main: {
          count: metrics.total.predictions.total,
          description: 'Total predictions created',
        },
        list: [
          `${metrics.total.predictions.pending} predictions pending`,
          `${metrics.total.predictions.won} winning predictions`,
          `${metrics.total.predictions.loss} losing predictions`,
        ],
      },
      {
        main: {
          count: metrics.total.notifications.total,
          description: 'Total notifications sended',
        },
        list: [
          `${metrics.total.notifications.push} push notifications sended`,
          `${metrics.total.notifications.email} email notifications sended`,
        ],
      },
    ],
    kpi: [
      {
        count: metrics.kpi.userPermanence,
        description: 'User permanence (min)',
      },
      {
        count: metrics.kpi.pageviewsPerUser,
        description: 'Pageviews per user',
      },
      {
        count: metrics.kpi.predictionsWinRate,
        description: 'Predictions win rate (%)',
      },
      {
        count: metrics.kpi.predictionsPerUser,
        description: 'Predictions per user',
      },
      {
        count: metrics.kpi.pushNotificationsPerUser,
        description: 'Push notifications per user',
      },
      {
        count: metrics.kpi.emailNotificationsPerUser,
        description: 'Email notifications per user',
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
