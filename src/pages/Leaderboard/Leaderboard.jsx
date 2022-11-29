/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './leaderboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../service/leaderboard';
import { getTournament } from '../../state/tournament';
import Leaderboards from '../../components/Leaderboard/Leaderboard.jsx';

const Leaderboard = () => {
  const tournament = useSelector((state) => state.tournament.tournament);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournament());
  }, []);

  useEffect(() => {
    if (tournament) {
      getUsers(tournament._id).then((data) => setUsers(data));
    }
  }, [tournament]);

  return <Leaderboards users={users} />;
};

export default Leaderboard;
