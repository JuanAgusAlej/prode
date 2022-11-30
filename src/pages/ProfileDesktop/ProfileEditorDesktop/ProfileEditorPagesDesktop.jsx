import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './profileEditorPagesDesktop.css';
import useInput from '../../../utils/useInput';
import { iconPaths } from './iconPathsDesktop';
import { getUser } from '../../../state/user';
import { modifyUser, modifyUserSettings } from '../../../service/userApi';

const ProfileEditorPagesDesktop = () => {
  const { user } = useSelector((state) => state);
  const [notifications, setNotifications] = useState();
  const [notificationsKeys, setNotificationsKeys] = useState();
  const dispatch = useDispatch();
  const newUsername = useInput();
  const navigate = useNavigate();
  const [languageChange, setLanguageChange] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (!user.isLoading) {
      if (user?.userData?.notifications) {
        setNotificationsKeys(Object.keys(user?.userData?.notifications));
      }
      i18n.changeLanguage(user?.userData?.language);
      setNotifications(user?.userData?.notifications);
    }
  }, [user]);

  const handleClick = (e, path) => {
    e.preventDefault();
    modifyUser({
      avatar: path,
      alias: user.userData.alias,
    }).then(() => {
      dispatch(getUser());
      navigate(`/profile/${user.userData.id}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (languageChange !== '') {
      i18n.changeLanguage(languageChange);
      modifyUserSettings({
        ...notifications,
        language: languageChange,
      }).then(() => {
        if (newUsername.value) {
          modifyUser({
            avatar: user.userData.avatar,
            alias: newUsername.value,
          }).then(() => {
            dispatch(getUser());
            navigate(`/profile/${user.userData.id}`);
          });
        } else {
          dispatch(getUser());
          navigate(`/profile/${user.userData.id}`);
        }
      });
    } else {
      modifyUserSettings({
        ...notifications,
      }).then(() => {
        if (newUsername.value) {
          modifyUser({
            avatar: user.userData.avatar,
            alias: newUsername.value,
          }).then(() => {
            dispatch(getUser());
            navigate(`/profile/${user.userData.id}`);
          });
        } else {
          dispatch(getUser());
          navigate(`/profile/${user.userData.id}`);
        }
      });
    }
  };

  const handleLanguage = (e) => {
    e.preventDefault();
    setLanguageChange(e.target.value);
  };

  const handleChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  if (user.isLoading) {
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
      <div className="usernameDiv2">
        <p className="emailActual">{user?.userData?.email}</p>
      </div>
      <div className="changesDiv">
        <div className="changes1">
          <div className="iconDiv">
            <div className="iconChange">
              <div>{t('currentIcon')}:</div>
              <div>
                <img
                  src={user?.userData?.avatar}
                  alt="user icon"
                  className="imgProfile"
                />
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
          <div className="usernameDiv2">
            <div className="userActualDiv">
              <p>{t('currentUsername')}: </p>
              <p className="userActual">{user?.userData?.alias}</p>
            </div>
            <div className="usernameChange">
              <p>{t('changeUsername')}: </p>
              <form onSubmit={handleSubmit} className="formUsername">
                <input
                  {...newUsername}
                  type="text"
                  name="usernameChange"
                  className="inputUsername"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="changes2">
          <div className="selectionDiv">
            <div className="idiomaActualDiv">
              <p>{t('currentLanguage')}:</p>
              <p className="idiomaActual">{user?.userData?.language}</p>
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
          <div>
            {notifications ? (
              <div className="notificationsDiv">
                <div className="my-4">
                  <p>{t('notifications')}:</p>
                  <div className="d-flex row">
                    <p className="col-4">{notificationsKeys[0]}</p>
                    <input
                      className="form-check-input "
                      type="checkbox"
                      name={notificationsKeys[0]}
                      onChange={handleChange}
                      checked={notifications?.[notificationsKeys[0]]}
                    />
                  </div>
                  <div className="d-flex row">
                    <p className="col-4">{notificationsKeys[1]}</p>
                    <input
                      className="form-check-input "
                      type="checkbox"
                      name={notificationsKeys[1]}
                      onChange={handleChange}
                      checked={notifications?.[notificationsKeys[1]]}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
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

export default ProfileEditorPagesDesktop;
