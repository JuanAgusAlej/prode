import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profilePages.css';

const ProfilePages = () => {
  const navigate = useNavigate();
  const buttonHandler = (e) => {
    e.preventDefault();
    navigate('/profile/edit');
  };

  return (
    <div>
      <div className="container1">
        <div className="imgProfileDiv">
          <img
            src="https://thumbs.dreamstime.com/b/icono-del-perfil-avatar-defecto-placeholder-gris-de-la-foto-102846161.jpg"
            alt="icon placeholder"
            className="imgProfile"
          />
        </div>
        <div className="userNameDiv">
          <h1 className="userName">Usuario</h1>
          <button onClick={buttonHandler}>
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;
