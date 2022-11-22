import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import pelota from '../../assets/Flag_of_Argentina.svg.webp';
import CardPartidos from '../../components/CardPartidos/CardPartidos.jsx';
import './fixturePages.css';

const FixturePages = () => {
  const matchs = [
    {
      instace: 'Grup A',
      date: '15:30hs 20/11',
      teamA: {
        name: 'arg',
        country: 'arg',
        logo: pelota,
      },
      goalsA: 7,
      teamB: {
        name: 'bra',
        country: 'bra',
        logo: pelota,
      },
      goalsB: 1,
      result: 'arg',
    },
    {
      date: '20/11',
      teamA: {
        name: 'arg',
        country: 'arg',
        logo: pelota,
      },
      goalsA: 0,
      teamB: {
        name: 'bra',
        country: 'bra',
        logo: pelota,
      },
      goalsB: 0,
      result: '',
    },
    {
      date: '20/11',
      teamA: {
        name: 'arg',
        country: 'arg',
        logo: pelota,
      },
      goalsA: 1,
      teamB: {
        name: 'bra',
        country: 'bra',
        logo: pelota,
      },
      goalsB: 2,
      result: 'bra',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="d-flex text-center">
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
      {matchs.map((match, id) => (
        <CardPartidos key={id} match={match} />
      ))}
      {/* <div className="iconHome d-flex m-3 flex-column align-items-center ">
        <div className="d-flex  mt-3">
          <div className="d-flex align-items-center">
            <img src={pelota} alt="" width="40" height="34" className=" " />
            <p className="ms-2 my-2 ">Arg</p>
            <p className="mx-2 my-2">0</p>
          </div>
          <p className="my-2">-</p>
          <div className="d-flex align-items-center">
            <p className="mx-2 my-2">0</p>
            <p className="me-2 my-2">Arg</p>
            <img src={pelota} alt="" width="40" height="34" className="" />
          </div>
        </div>
        <p>15:30hs - 20/11 </p>
      </div>
      <div className="iconHome d-flex m-3 flex-column align-items-center ">
        <div className="d-flex  mt-3">
          <div className="d-flex align-items-center">
            <img src={pelota} alt="" width="40" height="34" className="" />
            <p className="ms-2 my-2 ">Arg</p>
            <p className="mx-2 my-2">0</p>
          </div>
          <p className="my-2">-</p>
          <div className="d-flex align-items-center">
            <p className="mx-2 my-2">0</p>
            <p className="me-2 my-2">Arg</p>
            <img src={pelota} alt="" width="40" height="34" className="lose" />
          </div>
        </div>
        <p>15:30hs - 20/11 </p>
      </div>
      <div className="iconHome d-flex m-3 flex-column align-items-center ">
        <div className="d-flex  mt-3">
          <div className="d-flex align-items-center">
            <img src={pelota} alt="" width="40" height="34" className="" />
            <p className="ms-2 my-2 ">Arg</p>
            <p className="mx-2 my-2">0</p>
          </div>
          <p className="my-2">-</p>
          <div className="d-flex align-items-center">
            <p className="mx-2 my-2">0</p>
            <p className="me-2 my-2">Arg</p>
            <img src={pelota} alt="" width="40" height="34" className="" />
          </div>
        </div>
        <p>15:30hs - 20/11 </p>
      </div> */}
      <MenuBar />
    </>
  );
};

export default FixturePages;
