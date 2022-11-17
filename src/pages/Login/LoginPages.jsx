import React, { useEffect, useState } from 'react';
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
    if (restult !== null || localStorage.getItem('token')) {
      console.log(restult);
      localStorage.setItem('token', JSON.stringify(restult.user.uid));
      navigate('/home');
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <div className="login">
        <div className="box text-center">
        {/* <button className='btnIdioma'>idioma</button> */}
                  <div className="boxItems ">
                      <p className='boxFont'>Prode-Mundial</p>
                      <span className='boxFont'>Tonic3</span>
                  </div>
          <GoogleButton
            className="boxItems"
            type="dark"
            onClick={register}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPages;
