import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './profilePages.css';
import { tokenValidated } from '../../service/userApi';

const ProfilePages = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    tokenValidated().then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  const buttonHandler = (e) => {
    e.preventDefault();
    navigate(`/profile/${user.id}/edit`);
  };

  if (user === {}) {
    return (
      <div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  return (
    <div className="profileDiv">
      <div className="container1">
        <div className="imgProfileDiv">
          <img
            src={user.avatar}
            alt="icon placeholder"
            className="imgProfile"
          />
        </div>
        <div className="userNameDiv">
          <h1 className="userName">{user.alias}</h1>
          <button className="btnEdit" onClick={buttonHandler}>
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item abc">
            {t('email')}: {user.email}
          </li>
          <li className="list-group-item abc">
            {t('name')}: {user.name}
          </li>
          <li className="list-group-item abc">
            {t('region')}: {user.region}
          </li>
          <li className="list-group-item abc">
            {t('points')}: {user.points}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePages;
