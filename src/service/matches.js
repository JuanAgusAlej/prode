import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

export const getMatches = async (id) => {
  const axiosConfig = setAxiosConfig();
  const matches = await axios.get(`${url}/tournament/${id}/match`, axiosConfig);
  return matches.data;
};
