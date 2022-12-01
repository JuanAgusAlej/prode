import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pelota from '../../assets/log.jpg';
import { tokenValidated } from '../../service/userApi';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [user, setUser] = useState(null);
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
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/validation') {
      setHide(true);
    } else {
      setHide(false);
    }
    localStorageLogin();
  }, [location.pathname]);

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark p-0 ">
      <div
        className={
          hide === true
            ? 'd-none'
            : 'container-fluid my-1 align-items-center mx-2 icon'
        }>
        <img
          src={pelota}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        {user !== null ? (
          <p className="m-0">{user?.points}pts</p>
        ) : (
          <p className="m-0"></p>
        )}
        <i className="bi bi-gear  "></i>
      </div>
    </nav>
  );
};

export default Navbar;
