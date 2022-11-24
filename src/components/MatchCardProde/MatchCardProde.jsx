/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import InputGoals from '../../commons/Prode/InputGoals.jsx';
import ButtonsGoals from '../../commons/Prode/ButtonsGoals.jsx';
import CountDown from '../CountDown/CountDown.jsx';
import { postPrediction } from '../../service/predictions';

const MatchCardProde = ({
  teamA,
  teamB,
  date,
  matchId,
  imgA,
  imgB,
  user,
  contentButton,
  setContentButton,
}) => {
  const [goalsA, setGoalsA] = useState(0);
  const [goalsB, setGoalsB] = useState(0);

  const handleGoals = e => {
    if (e.target.parentNode.id === 'buttonGoalsA') {
      if (e.target.textContent === '+') setGoalsA(prev => prev + 1);
      else if (goalsA > 0) setGoalsA(prev => prev - 1);
    } else if (e.target.parentNode.id === 'buttonGoalsB') {
      if (e.target.textContent === '+') setGoalsB(prev => prev + 1);
      else if (goalsB > 0) setGoalsB(prev => prev - 1);
    }
  };

  const handlePrediction = (goallsA, goallsB, matchhId) => {
    postPrediction(goallsA, goallsB, matchhId).then(data => {
      setContentButton('Edit Prediction');
      console.log(data);
    });
  };

  useEffect(() => {
    user.predictions.forEach((pred) => {
      if (pred.matchId === matchId) {
        setGoalsA(pred.goalsA);
        setGoalsB(pred.goalsB);
        setContentButton('Edit Prediction');
      }
    });
  }, [user]);

  return (
    <div className='matchCard p-3'>
      <div className='row roww'>
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
      <div className='row roww middleRow'>
        <div className='nameTeam col-2'>{teamA}</div>
        <img
          src={imgA}
          alt='Argentina'
          className='flagTeam col-3'
          id='flagTeamA'
        />
        <InputGoals id={'inputGoalsA'} value={goalsA} className='col-1'/>
        <InputGoals id={'inputGoalsB'} value={goalsB} className='col-1'/>
        <img
          src={imgB}
          alt='Argentina'
          className='flagTeam col-3'
          id='flagTeamB'
        />
        <div className='nameTeam col-2'>{teamB}</div>
      </div>
      <div className='row roww'>
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
      <div className='row roww group'>Group C</div>
      <div className='row roww group'>
        <CountDown date={date} />
      </div>
      <div className='row roww'>
        <button
          className='btn btn-light buttonPredict'
          onClick={() => handlePrediction(goalsA, goalsB, matchId)}
        >
          {contentButton}
        </button>
      </div>
    </div>
  );
};

export default MatchCardProde;
