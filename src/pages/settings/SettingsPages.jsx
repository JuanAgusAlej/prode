/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SettingsPages = () => {
  const { user } = useSelector((state) => state);
  const [notifications, setNotifications] = useState();
  const [notificationsKeys, setNotificationsKeys] = useState();
  const [language, setLanguage] = useState();
  const updateDatosSetting = () => {
  };
  useEffect(() => {
    if (!user.isLoading) {
      setNotificationsKeys(Object.keys(user.userData.notifications));
      setNotifications(user.userData.notifications);
      setLanguage(user.userData.language);
    }
  }, [user]);
  const handleChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };
  const handleClick = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      {notifications ? (
        <div className='bodyPaging m-3 '>
          <div className=''>
            <h5>Idioma</h5>
            <select
              className='form-select my-3'
              onChange={handleClick}
              aria-label='Default select example'
            >
              <option value='EN' selected={language === 'EN'}>
                Ingles
              </option>
              <option value='ES' selected={language === 'ES'}>
                Español
              </option>
              <option value='PT' selected={language === 'PT'}>
                Portugues
              </option>
            </select>
          </div>
          <div className='my-4'>
            <p>Notificaciones</p>
            <div className='d-flex row'>
              <p className='col-4'>{notificationsKeys[0]}</p>
              <input
                className='form-check-input '
                type='checkbox'
                name={notificationsKeys[0]}
                onChange={handleChange}
                checked={notifications?.[notificationsKeys[0]]}
              />
            </div>
            <div className='d-flex row'>
              <p className='col-4'>{notificationsKeys[1]}</p>
              <input
                className='form-check-input '
                type='checkbox'
                name={notificationsKeys[1]}
                onChange={handleChange}
                checked={notifications?.[notificationsKeys[1]]}
              />
            </div>
          </div>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-sm-12'>
                <Link to={'/home'}>
                  <button
                    type='button'
                    className='btn btn-secondary p-0'
                    onClick={() => updateDatosSetting()}
                  >
                    Guardar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingsPages;
