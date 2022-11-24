import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navFixtureProde.css';

const NavFixtureProde = () => {
  const navigate = useNavigate();
  return (
    <div className='d-flex text-center'>
      <input
        type='radio'
        className='btn-check'
        name='btnradio'
        id='btnradio1'
        checked
        onChange={() => {}}
      />
      <label
        className='btn myButton btn-outline-primary col box d-flex align-items-center justify-content-center'
        htmlFor='btnradio1'
        onClick={() => navigate('/fixture')}
      >
        Partidos
      </label>

      <input
        type='radio'
        className='btn-check'
        name='btnradio'
        id='btnradio2'
        onChange={() => {}}
      />
      <label
        className='btn myButton btn-outline-primary col box'
        htmlFor='btnradio2'
        onClick={() => navigate('/fixture/prode')}
      >
        Partidos por jugar
      </label>
    </div>
  );
};

export default NavFixtureProde;
