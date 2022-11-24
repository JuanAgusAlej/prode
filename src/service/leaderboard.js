import axios from 'axios';

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

export const getUsers = async (id) => {
  const users = await axios.get(
    `${url}/tournament/${id}/leaderboard`,
    axiosConfig,
  );
  return users.data;
};
