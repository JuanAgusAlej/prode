import axios from 'axios';

const url = process.env.REACT_APP_URL;

export const healthCheck = async () => {
  try {
    const result = await axios.get(`${url}/healthCheck`);
    return console.log('HEALTHCHECK', result.data);
  } catch (err) {
    return console.error(err.message);
  }
};
