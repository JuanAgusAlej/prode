import React, { useEffect, useState } from 'react';
import Visitor from '../../commons/Visitor/Visitor.jsx';
import './cardPartidos.css';

const CardPartidos = ({ match }) => {
  const date = new Date(match.date);
  const fecha = date.toLocaleDateString();
  const [time, setTime] = useState('');
  useEffect(() => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (minutes === 0) {
      setTime(`${hours}:${minutes}0`);
    } else {
      setTime(`${hours}:${minutes}`);
    }
  }, []);
  return (
    <div className="iconHome d-flex m-3 flex-column align-items-center ">
      <div className="fecha mt-1">
        <p>{time}</p>
        <p>{fecha}</p>
      </div>
      <div className="d-flex m-2">
        <Visitor
          gol={match.goalsA}
          team={match.teamAId}
          local={true}
          win={match.result}
        />
        <p className="my-2">-</p>
        <Visitor
          gol={match.goalsB}
          team={match.teamBId}
          local={false}
          win={match.result}
        />
      </div>
      <p>{match.instace}</p>
    </div>
  );
};

export default CardPartidos;
