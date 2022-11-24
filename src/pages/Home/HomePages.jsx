import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
    </>
  );
};

export default HomePages;
