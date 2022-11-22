import React from 'react';
import './menuBar.css';

const MenuBar = () => {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container-fluid my-1 align-items-center mx-2 icon ">
        <i className="bi bi-person "></i>
        <i className="bi bi-house "></i>
        <i className="bi bi-controller "></i>
      </div>
    </nav>
  );
};

export default MenuBar;
