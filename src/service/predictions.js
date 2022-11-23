import axios from 'axios';

const url = process.env.REACT_APP_URL;

export const postPrediction = async (goalsA, goalsB, matchId) => {
  const prediction = await axios.post(`${url}/predi`, { goalsA, goalsB, matchId });
  console.log(prediction);
};
