import React from 'react';

const KpiCard = ({ data }) => {
  const { count, description } = data;
  return (
    <div className="offset-1 col-3  MetricCard">
      <h1 className="text-center count">{count}</h1>
      <p className="text-center description">{description}</p>
    </div>
  );
};

export default KpiCard;
