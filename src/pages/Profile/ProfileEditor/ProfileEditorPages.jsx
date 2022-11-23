import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './profileEditorPages.css';
import useInput from '../../../utils/useInput';
import { iconPaths } from './iconPaths';
import { tokenValidated, modifyUser } from '../../../service/userApi';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import MenuBar from '../../../components/MenuBar/MenuBar.jsx';

const ProfileEditorPages = () => {
  const newUsername = useInput();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { t, i18n } = useTranslation();

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
        <p>{t('loading')}</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="title">{t('modifyUser')}</h1>
      </div>
      <div className="iconDiv">
        <div className="iconChange">
          <div>{t('currentIcon')}:</div>
          <div>
            <img src={user.avatar} alt="user icon" className="imgProfile" />
          </div>
        </div>
        <div className="iconChange">
          <div>{t('changeIcon')}:</div>
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
          <p>{t('currentUsername')}: </p>
          <p className="userActual">{user.alias}</p>
        </div>
        <div className="usernameChange">
          <p>{t('changeUsername')}: </p>
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
          {t('save')}
        </button>
      </div>
      <MenuBar />
    </div>
  );
};

export default ProfileEditorPages;
