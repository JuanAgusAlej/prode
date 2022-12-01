/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import InputGoals from '../../commons/Prode/InputGoals.jsx';
import ButtonsGoals from '../../commons/Prode/ButtonsGoals.jsx';
import CountDown from '../CountDown/CountDown.jsx';
import { postPrediction } from '../../service/predictions';
import { getUser } from '../../state/user';

const MatchCardProde = ({
  teamA,
  teamB,
  date,
  match,
  imgA,
  imgB,
  user,
}) => {
  const [goalsA, setGoalsA] = useState(0);
  const [goalsB, setGoalsB] = useState(0);
  const [predicted, setPredicted] = useState('no-predicted');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleGoals = (e) => {
    if (e.target.parentNode.id === 'buttonGoalsA') {
      if (e.target.textContent === '+') setGoalsA((prev) => prev + 1);
      else if (goalsA > 0) setGoalsA((prev) => prev - 1);
    } else if (e.target.parentNode.id === 'buttonGoalsB') {
      if (e.target.textContent === '+') setGoalsB((prev) => prev + 1);
      else if (goalsB > 0) setGoalsB((prev) => prev - 1);
    }
  };

  const handlePrediction = (goallsA, goallsB, matchhId) => {
    postPrediction(goallsA, goallsB, matchhId).then((data) => {
      setPredicted('predicted');
      console.log(data);
    });
  };

  useEffect(() => {
    user.predictions.forEach((pred) => {
      if (pred.matchId === match._id) {
        setGoalsA(pred.goalsA);
        setGoalsB(pred.goalsB);
        setPredicted('predicted');
      }
    });
  }, [user]);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="matchCard p-3">
      <div className="row roww">
        <ButtonsGoals
          content={'+'}
          id={'buttonGoalsA'}
          handleGoals={handleGoals}
        />
        <ButtonsGoals
          content={'+'}
          id={'buttonGoalsB'}
          handleGoals={handleGoals}
        />
      </div>
      <div className="row roww middleRow">
        <div className="nameTeam col-2">{teamA.shortName}</div>
        <div className='col-3'>
          <div className='divFlag'>
            <img
              src={imgA}
              alt="flagTeam"
              className="flagTeam"
            />
          </div>
        </div>
        <InputGoals id={'inputGoalsA'} value={goalsA} className="col-1" />
        <InputGoals id={'inputGoalsB'} value={goalsB} className="col-1" />
        <div className='col-3'>
          <div className='divFlag'>
            <img
              src={imgB}
              alt="flagTeam"
              className="flagTeam"
            />
          </div>
        </div>
        <div className="nameTeam col-2">{teamB.shortName}</div>
      </div>
      <div className="row roww">
        <ButtonsGoals
          content={'-'}
          id={'buttonGoalsA'}
          handleGoals={handleGoals}
        />
        <ButtonsGoals
          content={'-'}
          id={'buttonGoalsB'}
          handleGoals={handleGoals}
        />
      </div>
      <div className="row roww group">{match.instance}</div>
      <div className="row roww group">
        <CountDown date={date} />
      </div>
      <div className="row roww">
        <button
          className="btn btn-light buttonPredict"
          onClick={() => handlePrediction(goalsA, goalsB, match._id)}
        >
          {predicted === 'predicted' ? t('predictEdit') : t('predict')}
        </button>
      </div>
    </div>
  );
};

export default MatchCardProde;
