import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

export const postPrediction = async (goalsA, goalsB, matchId) => {
  const axiosConfig = setAxiosConfig();
  const prediction = await axios.post(`${url}/prediction`, {
    goalsA,
    goalsB,
    matchId,
  }, axiosConfig);
  return prediction.data;
};
