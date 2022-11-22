import React from 'react';

const InputGoals = ({ id }) => {
  return (
    <div className='col-1' id={id}>
      <input type='number' className='input' value={1}></input>
    </div>
  );
};

export default InputGoals;
