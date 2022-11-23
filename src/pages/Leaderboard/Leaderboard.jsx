import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css';
import Leaderboards from '../../components/Leaderboard/Leaderboard.jsx';

const url = process.env.REACT_APP_URL;

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/user`)
      .then((res) => res.data)
      .then((allUsers) => setUsers(allUsers));
  }, []);

  return <Leaderboards users={users} />;
};

export default Leaderboard;
