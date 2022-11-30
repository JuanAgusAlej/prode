import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './navFixtureProde.css';

const NavFixtureProde = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="d-flex text-center">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        checked
        onChange={() => {}}
      />
      <label
        className="btn myButton btn-outline-primary col boxx d-flex align-items-center justify-content-center"
        htmlFor="btnradio1"
        onClick={() => navigate('/fixture')}
      >
        {t('gamesPlayed')}
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        onChange={() => {}}
      />
      <label
        className="btn myButton btn-outline-primary col boxx"
        htmlFor="btnradio2"
        onClick={() => navigate('/fixture/prode')}
      >
        {t('gamesToBePlayed')}
      </label>
    </div>
  );
};

export default NavFixtureProde;
