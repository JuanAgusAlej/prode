import React from 'react';

const InputGoals = ({ id, value }) => {
  return (
    <div className='col-1' id={id}>
      <input className='input readOnly' value={value} onChange={() => {}}></input>
    </div>
  );
};

export default InputGoals;
