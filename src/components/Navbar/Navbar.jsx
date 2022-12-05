/* eslint-disable operator-linebreak */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tokenValidated } from '../../service/userApi';
import { setAxiosConfig } from '../../utils/axiosConfig';
import './navbar.css';

const Navbar = () => {
  const url = process.env.REACT_APP_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [userPoints, setuserPoints] = useState(0);
  const localStorageLogin = async () => {
    if (localStorage.getItem('token')) {
      const data = await tokenValidated();
      if (!data.validated && location.pathname !== `/${data.direction}`) {
        navigate(data.direction);
      }
    } else if (location.pathname !== '/') {
      navigate('/');
    }
  };

  useEffect(() => {
    const getUserPoints = async () => {
      try {
        const axiosConfig = setAxiosConfig();
        const data = await axios.get(`${url}/user/me`, axiosConfig);
        if (data.data.points) setuserPoints(data.data.points);
      } catch (err) {
        console.log(err);
      }
    };
    getUserPoints();
    const interval = setInterval(() => {
      getUserPoints();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (
      location.pathname === '/' ||
      location.pathname === '/validation' ||
      location.pathname.search('admin') === 1
    ) {
      setHide(true);
    } else {
      setHide(false);
    }
    localStorageLogin();
  }, [location.pathname]);
  const onClickLogout = () => {
    localStorage.removeItem('token');
  };
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark p-0 ">
      <div
        className={
          hide === true
            ? 'd-none'
            : 'container-fluid my-1 align-items-center mx-2 icon'
        }
      >
        <img
          src="https://tonic3.com/static/Tonic3_RGB_1-c2d1d8ad7f534000ba675313197f5fe4.webp"
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        <p className="m-0">{userPoints} pts</p>
        <Link to={'/'}>
          <i
            className="bi bi-box-arrow-in-left"
            onClick={() => onClickLogout()}
          ></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
