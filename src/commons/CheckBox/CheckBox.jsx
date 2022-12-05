import React from 'react';

const CheckBox = ({ estado, propiedad, handleChange }) => {
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        name={propiedad}
        onChange={handleChange}
        checked={estado}
      />
      <label className="form-check-label">{propiedad}</label>
    </div>
  );
};

export default CheckBox;
