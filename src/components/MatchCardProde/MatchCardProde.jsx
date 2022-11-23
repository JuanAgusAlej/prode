import React from 'react';
import InputGoals from '../../commons/Prode/InputGoals.jsx';
import ButtonsGoals from '../../commons/Prode/ButtonsGoals.jsx';
import CountDown from '../CountDown/CountDown.jsx';

const MatchCardProde = ({
  handleGoals,
  handlePrediction,
  teamA,
  goalsA,
  teamB,
  goalsB,
  date,
}) => {
  return (
    <div className='matchCard m-0 p-3'>
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
        <div className='nameTeam'>{teamA}</div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png'
          alt='Argentina'
          className='flagTeam'
          id='flagTeamA'
        />
        <InputGoals id={'inputGoalsA'} value={goalsA} />
        <InputGoals id={'inputGoalsB'} value={goalsB} />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png'
          alt='Argentina'
          className='flagTeam'
          id='flagTeamB'
        />
        <div className='nameTeam'>{teamB}</div>
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
      <div className='row roww group'>
        Group C
      </div>
      <div className='row roww group'>
        <CountDown date={date} />
      </div>
      <div className='row roww'>
        <button className='btn btn-light buttonPredict' onClick={handlePrediction}>Predict</button>
      </div>
    </div>
  );
};

export default MatchCardProde;
