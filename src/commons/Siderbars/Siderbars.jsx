import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tokenValidated } from '../../service/userApi';
import { setAxiosConfig } from '../../utils/axiosConfig';
import ButtonSiderbars from './ButtonSiderbars.jsx';
import './siderbars.css';

const Siderbars = ({ dropdown, adm }) => {
  const url = process.env.REACT_APP_URL;
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [userPoints, setuserPoints] = useState(0);
  const localStorageLogin = async () => {
    if (localStorage.getItem('token')) {
      const data = await tokenValidated();
      setUser(data);
      if (!data.validated && location.pathname !== `/${data.direction}`) {
        navigate(data.direction);
      }
    } else if (location.pathname !== '/') {
      navigate('/');
    }
  };

  let buttons = [
    {
      text: t('dashboard'),
      direction: '/admin',
    },
    {
      text: t('users'),
      direction: '/admin/users',
    },
    {
      text: t('teams'),
      direction: '/admin/teams',
    },
    {
      text: t('tournaments'),
      direction: '/admin/tournaments',
    },
    {
      text: t('matchs'),
      direction: '/admin/matchs',
    },
  ];

  if (!adm) {
    buttons = [
      {
        text: t('home'),
        direction: '/home',
      },
      {
        text: t('profile'),
        direction: '/profile/asd',
      },
      {
        text: t('prizes'),
        direction: '/prizes',
      },
      {
        text: t('tutorial'),
        direction: '/tutorial',
      },
    ];
  }

  useEffect(() => {
    localStorageLogin();
  }, []);

  useEffect(() => {
    const getUserPoints = async () => {
      try {
        const axiosConfig = setAxiosConfig();
        const data = await axios.get(`${url}/user/me`, axiosConfig);
        if (data.data.points) setuserPoints(data.data.points);
      } catch (err) {
        console.error(err);
      }
    };
    getUserPoints();
    const interval = setInterval(() => {
      getUserPoints();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const onClickLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark  navBarAdmin sticky-top">
      <ul className="nav  nav-pills flex-column mb-auto ">
        {buttons.map((button, i) => (
          <ButtonSiderbars
            key={i}
            text={button.text}
            direction={button.direction}
          />
        ))}
        {user?.role === 'ADMIN_ROLE' && !adm ? (
          <ButtonSiderbars
            key={buttons.length + 1}
            text={'Admin'}
            direction={'/admin'}
          />
        ) : (
          <></>
        )}
      </ul>
      {adm ? (
        <div className="dropdown text-center">
          <Link className="nav-link" to={'/home'}>
            <i className="bi bi-arrow-left text-white"></i>
          </Link>
        </div>
      ) : (
        <div className="dropdown text-center">
          <Link
            className="nav-link bi-box-arrow-in-left"
            to={'/'}
            onClick={() => onClickLogout()}
          ></Link>
        </div>
      )}
    </div>
  );
};

export default Siderbars;
