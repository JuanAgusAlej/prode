import React from 'react';
import Visitor from '../../commons/Visitor/Visitor.jsx';
import './cardPartidos.css';

const CardPartidos = ({ match }) => {
  return (
    <div className="iconHome d-flex m-3 flex-column align-items-center ">
      <div className="fecha ">
        <p >{match.date}</p>
        <p >{match.date}</p>
      </div>
      <div className="d-flex m-2">
        <Visitor
          gol={match.goalsA}
          team={match.teamA}
          local={true}
          win={match.result}
        />
        <p className="my-2">-</p>
        <Visitor
          gol={match.goalsB}
          team={match.teamB}
          local={false}
          win={match.result}
        />
      </div>
      <p>{match.instace}</p>
    </div>
  );
};

export default CardPartidos;
