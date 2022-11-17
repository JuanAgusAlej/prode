import React from 'react';
import pelota from '../../assets/log.jpg';
import fondo from '../../assets/homePages.jpg';
import './home.css';

const HomePages = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-dark bg-dark ">
        <div className="container-fluid">
          <img
            src={pelota}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top ms-3"
          />
          <i className="bi bi-gear prueba"></i>
        </div>
      </nav>
      <div className="fondo d-flex justify-content-center">
        <img src={fondo} className="card-img image" />
        <div className="container  bigBox">
          <div className="row ">
            <div className="col-10 offset-1 box ">1 of 2</div>
          </div>
          <div className="row my-3 justify-content-md-center">
            <div className="col box boxItems">1 of 3</div>
            <div className="col box boxItems">3 of 3</div>
          </div>
        </div>
      </div>

      <nav className="navbar fixed-bottom  navbar-dark bg-dark">
        <div className="container-fluid">
          <i className="bi bi-person prueba"></i>
          <i className="bi bi-house prueba"></i>
          <i className="bi bi-controller prueba"></i>
        </div>
      </nav>
    </>
  );
};

export default HomePages;
