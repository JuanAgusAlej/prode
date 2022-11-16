import React, { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import app from '../../service/firebase';

const LoginPages = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();
  auth.languageCode = 'it';

  const register = () => {
    signInWithRedirect(auth, provider);
  };

  const prueba = async () => {
    const restult = await getRedirectResult(auth);
    console.log('result', restult);
    if (restult !== null) {
      navigate('/hola');
    }
  };

  useEffect(() => {
    prueba();
  }, []);

  return (
    <div>
      <GoogleButton
        type="light" // can be light or dark
        onClick={register}
      />
    </div>
  );
};

export default LoginPages;
