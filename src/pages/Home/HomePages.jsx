import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fondo from '../../assets/homePages.jpg';
import './home.css';

const HomePages = () => {
  const { i18n } = useTranslation();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.userData?.language);
    }
  }, [user]);

  return (
    <>
      <div className="fondo d-flex justify-content-center text-center">
        <img src={fondo} className="card-img image" />
        <div className="container  bigBox">
          <div className="row ">
            <Link className="col-10 offset-1 box " to={'/fixture'}>
              <div>fixture</div>
            </Link>
          </div>
          <div className="row my-3 justify-content-md-center">
            <Link className="col box boxItems" to={'/tutorial'}>
              <div>tutorial</div>
            </Link>
            <Link className="col box boxItems" to={'/sdfsdfd'}>
              <div>Premios</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
