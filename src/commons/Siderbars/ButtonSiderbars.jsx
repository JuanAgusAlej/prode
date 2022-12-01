import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSiderbars = ({ text, direction }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={direction}>
        {text}
      </Link>
    </li>
  );
};

export default ButtonSiderbars;
