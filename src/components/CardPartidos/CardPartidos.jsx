/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Visitor from '../../commons/Visitor/Visitor.jsx';
import './cardPartidos.css';

const CardPartidos = ({ match }) => {
  const date = new Date(match.date);
  const fecha = date.toLocaleDateString(navigator.language);
  const user = useSelector((state) => state.user.userData);
  const [time, setTime] = useState('');
  const [prediction, setPrediction] = useState({});

  useEffect(() => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (minutes === 0) {
      setTime(`${hours}:${minutes}0`);
    } else {
      setTime(`${hours}:${minutes}`);
    }
  }, []);

  useEffect(() => {
    user?.predictions.forEach((pred) => {
      if (pred.matchId === match._id) {
        setPrediction(pred);
      }
    });
  }, [user]);

  return (
    <div className="iconHome d-flex flex-column">
      <div className="fecha mt-1">
        <p>{time}</p>
        {prediction.state === true ? (
          <div className="pts win">
            Obtained {prediction.points ? prediction.points : 0} pts
          </div>
        ) : (
          <div className="pts los">
            Obtained {prediction.points ? prediction.points : 0} pts
          </div>
        )}
        <p>{fecha}</p>
      </div>
      <div className="d-flex row cont">
        <Visitor
          gol={match.goalsA}
          team={match.teamAId}
          local={true}
          win={match.result}
        />
        <p className="my-2 col-1 instance" id="dash">
          -
        </p>
        <Visitor
          gol={match.goalsB}
          team={match.teamBId}
          local={false}
          win={match.result}
        />
      </div>
      <div className="row pred">
        {prediction.state === true ? (
          <>
            <div className="col-5 predDiv predDivLeft win">
              {prediction.goalsA}
            </div>
            <div className="col-1 predDiv instance win">-</div>
            <div className="col-5 predDiv predDivRight win">
              {prediction.goalsB}
            </div>
          </>
        ) : (
          <>
            <div className="col-5 predDiv predDivLeft los">
              {prediction.goalsA}
            </div>
            <div className="col-1 predDiv instance los">-</div>
            <div className="col-5 predDiv predDivRight los">
              {prediction.goalsB}
            </div>
          </>
        )}
      </div>
      <p className="instance">{match.instance}</p>
    </div>
  );
};

export default CardPartidos;
