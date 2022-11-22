import React from 'react';
import './loginTitle.css';

const LoginTitle = ({ title, company }) => {
  return (
    <div className="boxFont">
      <p className="mt-3 mb-0">{title}</p>
      <p>{company}</p>
    </div>
  );
};

export default LoginTitle;
