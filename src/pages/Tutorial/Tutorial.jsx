import React from 'react';
import './tutorial.css';
import tutorial from '../../utils/tutorial';

const Tutorial = () => {
  return (
    <div className='container fix'>
      <div className='howToPlay'>HOW TO PLAY</div>
      <hr />
      {tutorial.map((step, i) => (
        <div key={i}>
          <div className='tutorialDiv'>
            <div className='innerDivText'>{step.text}</div>
            <div className='innerDivPhoto'>
              <img className='img' src={step.img} alt='tutorialImg' />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Tutorial;
