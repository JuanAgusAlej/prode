import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './profilePages.css';
import { getUser } from '../../state/user';

const ProfilePages = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (!user.isLoading) {
      i18n.changeLanguage(user?.userData?.language);
    }
  }, [user]);

  const buttonHandler = (e) => {
    e.preventDefault();
    navigate(`/profile/${user.userData.id}/edit`);
  };

  if (user.isLoading) {
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
            src={user?.userData?.avatar}
            alt="icon placeholder"
            className="imgProfile"
          />
        </div>
        <div className="userNameDiv">
          <h1 className="userName">{user?.userData?.alias}</h1>
          <button className="btnEdit" onClick={buttonHandler}>
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item abc">
            {t('email')}: {user?.userData?.email}
          </li>
          <li className="list-group-item abc">
            {t('name')}: {user?.userData?.name}
          </li>
          <li className="list-group-item abc">
            {t('region')}: {user?.userData?.region}
          </li>
          <li className="list-group-item abc">
            {t('points')}: {user?.userData?.points}
          </li>
          <li className="list-group-item abc">
            {t('language')}: {user?.userData?.language}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePages;
