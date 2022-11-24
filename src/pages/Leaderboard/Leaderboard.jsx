/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './leaderboard.css';
import { useSelector } from 'react-redux';
import { getUsers } from '../../service/leaderboard';
import Leaderboards from '../../components/Leaderboard/Leaderboard.jsx';

const Leaderboard = () => {
  const tournament = useSelector((state) => state.tournament.tournament);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (tournament) {
      getUsers(tournament._id).then((data) => setUsers(data));
    }
  }, [tournament]);

  return <Leaderboards users={users} />;
};

export default Leaderboard;
