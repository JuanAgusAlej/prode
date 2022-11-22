import React from 'react';
import pelota from '../../assets/log.jpg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark p-0 ">
      <div className="container-fluid my-1 align-items-center mx-2 icon">
        <img
          src={pelota}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        <p className="m-0">180pts</p>
        <i className="bi mb-1 bi-gear  "></i>
      </div>
    </nav>
  );
};

export default Navbar;
