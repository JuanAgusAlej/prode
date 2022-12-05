/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import CardPartidos from '../../components/CardPartidos/CardPartidos.jsx';
import './profilePagesDesktop.css';
import { getUser } from '../../state/user';
import { getTournament } from '../../state/tournament';
import Siderbars from '../../commons/Siderbars/Siderbars.jsx';
import { getMatches } from '../../service/matches';

const ProfilePagesDesktop = () => {
  const [matchs, setMatchs] = useState([]);
  const { tournament } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const matchsGet = async () => {
    const data = await getMatches(tournament.tournament._id);
    const data2 = data.filter((mtch) => mtch.result !== 'PENDING');
    const arr = [];
    if (data2.length > 3) {
      arr.push(
        data2[data2.length - 1],
        data2[data2.length - 2],
        data2[data2.length - 3],
      );
      setMatchs(arr);
    } else {
      setMatchs(data2);
    }
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getTournament());
  }, []);

  useEffect(() => {
    if (!user.isLoading) {
      i18n.changeLanguage(user?.userData?.language);
    }
  }, [user]);

  useEffect(() => {
    if (!tournament.isLoading) {
      matchsGet();
    }
  }, [tournament]);

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
    <div className="father">
      <div className="menu col-1">
        <Siderbars dropdown={false} adm={false} />
      </div>
      <div className="children">
        <div className="container1">
          <div className="imgProfileDiv">
            <img
              src={user?.userData?.avatar}
              alt="icon placeholder"
              className="imgProfile2"
            />
          </div>
          <div className="userNameDiv">
            <h1 className="userName">{user?.userData?.alias}</h1>
            <button className="btnEdit" onClick={buttonHandler}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>
        </div>
        <div className="container2">
          <div className="info1">
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
          <div className="info2">
            <div className="resul">{t('yourLastResults')}</div>
            {!tournament.isLoading ? (
              matchs?.map((match) => (
                <CardPartidos key={match._id} match={match} />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePagesDesktop;
