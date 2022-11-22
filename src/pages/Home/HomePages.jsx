import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './home.css';

const HomePages = () => {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row text-center ">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            checked
          />
          <label
            className="btn myButton btn-outline-primary col box d-flex align-items-center justify-content-center"
            htmlFor="btnradio1">
            Partidos
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
          />
          <label
            className="btn myButton btn-outline-primary col box"
            htmlFor="btnradio2">
            Partidos por jugar
          </label>
        </div>
        <div className="box">1 of 3</div>
        <div className="box">1 of 3</div>
        <div className="box">1 of 3</div>
        <div className="box">1 of 3</div>
        <div className="box">1 of 3</div>
      </div>
      <MenuBar />
    </>
  );
};

export default HomePages;
