import React from 'react';
import InputGoals from '../../commons/Prode/InputGoals.jsx';
import ButtonsGoals from '../../commons/Prode/ButtonsGoals.jsx';

const MatchCardProde = ({
  handleGoals,
  teamA,
  goalsA,
  teamB,
  goalsB,
}) => {
  return (
    <div className='matchCard m-0 p-0'>
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
    </div>
  );
};

export default MatchCardProde;
