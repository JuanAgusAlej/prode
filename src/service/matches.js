import axios from 'axios';

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

export const getMatches = async () => {
  const matches = await axios.get(`${url}/match`, axiosConfig);
  console.log(matches.data);
  matches.data.splice(1); // temporal
  return matches.data;
};
