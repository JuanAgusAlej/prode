import React from 'react';
import pelota from '../../assets/Flag_of_Argentina.svg.webp';
import CardPartidos from '../../components/CardPartidos/CardPartidos.jsx';
import NavFixtureProde from '../../components/NavFixtureProde/NavFixtureProde.jsx';
import '../style.css';

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
    <div className="bodyPaging">
      <NavFixtureProde />
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
    </div>
  );
};

export default FixturePages;
