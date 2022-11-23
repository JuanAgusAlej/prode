import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profileEditorPages.css';
import useInput from '../../../utils/useInput';
import { iconPaths } from './iconPaths';
import { tokenValidated, modifyUser } from '../../../service/userApi';

const ProfileEditorPages = () => {
  const newUsername = useInput();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    tokenValidated().then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    console.log(path);
    modifyUser({ avatar: path }).then(() => {
      navigate(`/profile/${user.id}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUsername.value);
    modifyUser({ alias: newUsername.value }).then(() => {
      navigate(`/profile/${user.id}`);
    });
  };

  if (user === {}) {
    return (
      <div>
        <p>Cargando datos</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="title">MODIFICAR USUARIO</h1>
      </div>
      <div className="iconDiv">
        <div className="iconChange">
          <div>Icono actual:</div>
          <div>
            <img src={user.avatar} alt="user icon" className="imgProfile" />
          </div>
        </div>
        <div className="iconChange">
          <div>Cambiar icono:</div>
          {iconPaths.map((path) => {
            return (
              <div key={path} className="icons">
                <img
                  src={path}
                  alt="icono"
                  onClick={(e) => handleClick(e, path)}
                  className="icons"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="usernameDiv">
        <div className="userActualDiv">
          <p>Username actual: </p>
          <p className="userActual">{user.name}</p>
        </div>
        <div className="usernameChange">
          <p>Cambiar username: </p>
          <form onSubmit={handleSubmit}>
            <input {...newUsername} type="text" name="usernameChange" />
          </form>
        </div>
      </div>
      <div className="buttonDiv">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEditorPages;
