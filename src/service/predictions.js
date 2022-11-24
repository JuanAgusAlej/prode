import axios from 'axios';

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

export const postPrediction = async (goalsA, goalsB, matchId) => {
  const prediction = await axios.post(`${url}/prediction`, {
    goalsA,
    goalsB,
    matchId,
  }, axiosConfig);
  return prediction.data;
};
