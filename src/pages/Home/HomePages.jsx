import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
      <div className="fondo">
        <div className='row divImag'></div>
        <div className="row bigBox">
          <div className="col row rows">
            <Link className="link" to={'/fixture'}>
              <div className='boxItems box primmaryBox'>{t('Fixture')}</div>
            </Link>
          </div>
          <div className="row rows">
            <Link className="col link" to={'/tutorial'}>
              <div className='boxItems box secondaryBox'>{t('Tutorial')}</div>
            </Link>
            <Link className="col link" to={'/prizes'}>
              <div className='boxItems box secondaryBox'>{t('Prizes')}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
