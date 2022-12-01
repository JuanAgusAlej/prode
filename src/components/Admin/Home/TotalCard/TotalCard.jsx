import React from 'react';

const TotalCard = ({ data }) => {
  const { main, list } = data;

  return (
    <div className="offset-1 col-3  MetricCard">
      <h1 className="text-center count">{main.count}</h1>
      <p className="text-center description">{main.description}</p>
      <div className="box-details">
        <ul className="list-group">
          {list.map((item, index) => {
            return (
              <li key={index} className="list-group-item item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TotalCard;
