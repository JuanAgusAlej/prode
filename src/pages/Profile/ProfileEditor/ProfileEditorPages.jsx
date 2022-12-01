import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './profileEditorPages.css';
import useInput from '../../../utils/useInput';
import { iconPaths } from './iconPaths';
import { getUser } from '../../../state/user';
import { tokenValidated, modifyUser } from '../../../service/userApi';

const ProfileEditorPages = () => {
  const dispatch = useDispatch();
  const newUsername = useInput();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [languageChange, setLanguageChange] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    tokenValidated().then((data) => {
      setUser(data);
      i18n.changeLanguage(data?.language);
    });
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    modifyUser({
      avatar: path,
      alias: user.alias,
      language: user.language,
    }).then(() => {
      navigate(`/profile/${user.id}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername.value !== '' || languageChange !== '') {
      if (languageChange !== '') {
        i18n.changeLanguage(languageChange);
        if (newUsername.value !== '') {
          modifyUser({
            avatar: user.avatar,
            alias: newUsername.value,
            language: languageChange,
          }).then(() => navigate(`/profile/${user.id}`));
        } else {
          modifyUser({
            avatar: user.avatar,
            alias: user.alias,
            language: languageChange,
          }).then(() => navigate(`/profile/${user.id}`));
        }
      } else {
        modifyUser({
          avatar: user.avatar,
          alias: newUsername.value,
          language: user.language,
        }).then(() => navigate(`/profile/${user.id}`));
      }
      dispatch(getUser());
    }
  };

  const handleLanguage = (e) => {
    e.preventDefault();
    setLanguageChange(e.target.value);
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
          <div className="iconChange2">
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
      <div className="selectionDiv">
        <div className="idiomaActualDiv">
          <p>{t('currentLanguage')}:</p>
          <p className="idiomaActual">{user.language}</p>
        </div>
        <div className="selection">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleLanguage}
          >
            <option defaultValue="">{t('changeLanguage')}</option>
            <option value="ES">Español</option>
            <option value="EN">English</option>
            <option value="PT">Português</option>
          </select>
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
    </div>
  );
};

export default ProfileEditorPages;
