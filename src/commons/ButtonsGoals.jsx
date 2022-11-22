import React from 'react';

const buttonGoals = ({ content, id }) => {
  return (
    <div className='col-1 col-centered' id={id}>
      <button type='button' className='btn btn-light btn-sm button'>{content}</button>
    </div>
  );
};

export default buttonGoals;
