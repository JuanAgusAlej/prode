import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

export const getUsers = async (id) => {
  const axiosConfig = setAxiosConfig();
  const users = await axios.get(
    `${url}/tournament/${id}/leaderboard`,
    axiosConfig,
  );
  return users.data;
};
