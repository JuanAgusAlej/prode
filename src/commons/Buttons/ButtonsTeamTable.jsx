import React from 'react';

const ButtonsTeamTable = ({ action, objectKey }) => {
  return (
    <button
      type="button"
      id={objectKey}
      className="btn btn-link p-0"
      onClick={() => action(objectKey)}
      style={{
        width: 25,
        height: 25,
        fontSize: 16,
        marginLeft: 5,
        color: 'black',
      }}>
      <i className="bi bi-pencil-square"></i>
    </button>
  );
};

export default ButtonsTeamTable;
