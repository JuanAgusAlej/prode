import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fondo from '../../assets/homePages.jpg';
import './home.css';
import { getUser } from '../../state/user';
import { getTournament } from '../../state/tournament';

const HomePages = () => {
  const { t, i18n } = useTranslation();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.userData?.language);
    }
  }, [user]);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getTournament());
  }, []);

  return (
    <>
      <div className="fondo d-flex justify-content-center text-center">
        <img src={fondo} className="card-img image" />
        <div className="container  bigBox">
          <div className="row ">
            <Link className="col-10 offset-1 box " to={'/fixture'}>
              <div>{t('fixture')}</div>
            </Link>
          </div>
          <div className="row my-3 justify-content-md-center">
            <Link className="col box boxItems" to={'/tutorial'}>
              <div>{t('tutorial')}</div>
            </Link>
            <Link className="col box boxItems" to={'/sdfsdfd'}>
              <div>{t('prizes')}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
