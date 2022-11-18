import React, { useEffect } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import app from '../../service/firebase';
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

  const login = async () => {
    const restult = await getRedirectResult(auth);
    console.log('result', restult);
    if (restult !== null) {
      const data = await userLogin(restult.user);
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token));
        navigate(data.direction);
      }
      navigate(data.direction);
    }
  };

  useEffect(() => {
    // if (localStorage.getItem('token')) {
    //   tokenValidated();
    // }
    login();
  }, []);

  return (
    <>
      <div className="login">

        <div className="box text-center">
          <LoginTitle title="Prode-Mundial" company="Tonic3" />
          <GoogleButton className="boxItems" type="dark" onClick={register} />
        </div>
      </div>
    </>
  );
};

export default LoginPages;
