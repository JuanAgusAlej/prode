import React from 'react';
import InputGoals from '../../commons/InputGoals.jsx';
import ButtonsGoals from '../../commons/ButtonsGoals.jsx';

const MatchCardProde = () => {
  return (
    <div className='matchCard'>
      <div className='row'>
        <ButtonsGoals content={'+'} id={'buttonGoalsA'} />
        <ButtonsGoals content={'+'} id={'buttonGoalsB'} />
      </div>
      <div className='row middleRow'>
        <div className='nameTeam'>ARG</div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png'
          alt='Argentina'
          className='flagTeam'
          id='flagTeamA'
        />
        <InputGoals id={'inputGoalsA'} />
        <InputGoals id={'inputGoalsB'} />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png'
          alt='Argentina'
          className='flagTeam'
          id='flagTeamB'
        />
        <div className='nameTeam'>ARG</div>
      </div>
      <div className='row'>
        <ButtonsGoals content={'-'} id={'buttonGoalsA'} />
        <ButtonsGoals content={'-'} id={'buttonGoalsB'} />
      </div>
    </div>
  );
};

export default MatchCardProde;
