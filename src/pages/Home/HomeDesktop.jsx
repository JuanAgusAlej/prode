/* eslint-disable operator-linebreak */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './homeDesktop.css';
import { getTournament } from '../../state/tournament';
import { getUser } from '../../state/user';
import { getMatches } from '../../service/matches';
import CardPartidos from '../../components/CardPartidos/CardPartidos.jsx';
import MatchCardProde from '../../components/MatchCardProde/MatchCardProde.jsx';
import Leaderboard from '../../components/Leaderboard/Leaderboard.jsx';
import { getUsers } from '../../service/leaderboard';
import Siderbars from '../../commons/Siderbars/Siderbars.jsx';

const HomeDesktop = ({ refreshNotification }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [matchs, setMatchs] = useState([]);
  const [matches, setMatches] = useState([]);
  const [users, setUsers] = useState([]);
  const tournament = useSelector((state) => state.tournament.tournament);
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (tournament) {
      getUsers(tournament._id).then((data) => setUsers(data));
      getMatches(tournament._id).then((data) => {
        setMatchs(data);
        const dataFiltered = data.filter((match) => {
          const matchDate = new Date(`${match.date}`);
          const now = new Date();
          if (
            matchDate.getTime() - 7200000 > now.getTime() &&
            match.result === 'PENDING'
          ) {
            return true;
          } else {
            return false;
          }
        });
        setMatches(dataFiltered);
      });
    }
  }, [tournament]);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.language);
    }
  }, [user]);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getTournament());
  }, [refreshNotification]);

  return (
    <div className="father">
      <div className="menu col-1">
        <Siderbars dropdown={false} adm={false} />
      </div>
      <div className="children">
        <div className="row divImg"></div>
        <div className="container">
          <div className="row headers">
            <div className="col-4">{t('gamesPlayed')}</div>
            <div className="col-5">{t('gamesToBePlayed')}</div>
            <div className="col-3">{t('leaderboard')}</div>
          </div>
          <div className="row">
            <div className="col-4 container">
              {tournament
                ? matchs?.map((match) => (
                    <CardPartidos key={match._id} match={match} />
                  ))
                : null}
            </div>
            <div className="col-5 container">
              {matches.length && user
                ? matches.map((match) => (
                    <MatchCardProde
                      teamA={match.teamAId}
                      teamB={match.teamBId}
                      date={match.date}
                      match={match}
                      imgA={match.teamAId.logo}
                      imgB={match.teamBId.logo}
                      user={user}
                      key={match._id}
                    />
                  ))
                : null}
            </div>
            <div className="col-3 container">
              {users.length < 1 ? (
                <p>Loading</p>
              ) : (
                <Leaderboard users={users} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktop;
