import React from 'react';

const ButtonsMatchTable = ({ action, objectKey, popupTitle }) => {
  return (
    <button
      type="button"
      id={objectKey}
      className="btn btn-link p-0"
      onClick={() => action(objectKey, popupTitle)}
      style={{
        width: 25,
        height: 25,
        fontSize: 16,
        marginLeft: 5,
        color: 'black',
      }}
    >
      <i className="bi bi-pencil-square"></i>
    </button>
  );
};

export default ButtonsMatchTable;
