import React, { useEffect } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { app, getTokenPush } from '../../service/firebase';
import './loginPages.css';
import { tokenValidated, userLogin } from '../../service/userApi';
import LoginTitle from '../../components/LoginTitle/LoginTitle.jsx';

const LoginPages = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();
  auth.languageCode = 'it';

  const register = () => {
    signInWithRedirect(auth, provider);
  };
  const localStorageLogin = async () => {
    if (localStorage.getItem('token')) {
      const data = await tokenValidated();
      navigate(data.direction);
    }
  };

  const login = async () => {
    const restult = await getRedirectResult(auth);
    if (restult !== null) {
      const data = await userLogin(restult.user);
      if (data.token) {
        localStorage.setItem('token', data.token);
        getTokenPush();
        navigate(data.direction);
      }
      navigate(data.direction);
    }
  };

  useEffect(() => {
    localStorageLogin();
    login();
  }, []);

  return (
    <>
      <div className="login">
        <div className="boxLogin text-center">
          <LoginTitle title="Prode-Mundial" company="Tonic-3" />
          <GoogleButton className="boxItems" type="dark" onClick={register} />
        </div>
      </div>
    </>
  );
};

export default LoginPages;
