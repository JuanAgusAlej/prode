import axios from 'axios';

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

export const getMatches = async (id) => {
  const matches = await axios.get(`${url}/tournament/${id}/match`, axiosConfig);
  return matches.data;
};
