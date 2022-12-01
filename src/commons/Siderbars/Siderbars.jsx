import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSiderbars from './ButtonSiderbars.jsx';
import './siderbars.css';

const Siderbars = ({ buttons, dropdown }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark  navBarAdmin ">
      <ul className="nav  nav-pills flex-column mb-auto ">
        {buttons.map((button, i) => (
          <ButtonSiderbars
            key={i}
            text={button.text}
            direction={button.direction}
          />
        ))}
      </ul>
      {dropdown ? (
        <div className="dropdown text-center">
          <Link className="nav-link" to={'/admin'}>
            <i className="bi bi-arrow-left text-white"></i>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Siderbars;
