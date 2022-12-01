/* eslint-disable comma-dangle */
import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

const pageview = async (page) => {
  await axios.post(
    `${url}/metrics`,
    { action: 'PAGEVIEW', value: page },
    setAxiosConfig()
  );
};

const activePulse = async (page) => {
  await axios.post(`${url}/metrics`, { action: 'ACTIVE' }, setAxiosConfig());
};

export { pageview, activePulse };
