/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

export const getUserLocation = async () => {
  const data = await axios.get('https://ipinfo.io/json?token=e2a963c63ce0e0');
  return data;
};

const userPost = async (userData) => {
  const infoUser = {
    email: userData.email,
    uid: userData.uid,
    avatar: userData.photoURL,
    name: userData.displayName,
    region: userData.country,
    timezone: userData.timezone,
  };
  const { data } = await axios.post(`${url}/user/signup`, infoUser);
  localStorage.setItem('token', data.token);
  data.direction = '/validation';
  return data;
};

export const userLogin = async (userData) => {
  const { uid } = userData;
  try {
    const { data } = await axios.post(`${url}/user/login`, { uid });
    if (data.user.validated) {
      data.direction = '/home';
      return data;
    }

    data.direction = `profile/${data.id}/edit`;

    return data;
  } catch (error) {
    const { data: userLocation } = await getUserLocation();
    const data = await userPost({
      ...userData,
      country: userLocation.country,
      timezone: userLocation.timezone,
    });
    return data;
  }
};

export const tokenValidated = async () => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios(`${url}/user/me`, axiosConfig);
  if (data.validated) {
    data.direction = '/home';
    return data;
  }
  data.direction = `profile/${data.id}/edit`;
  return data;
};

export const modifyUser = async (obj) => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios.put(`${url}/user/me`, obj, axiosConfig);
  return data;
};

export const modifyUserSettings = async (obj) => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios.put(`${url}/user/me/settings`, obj, axiosConfig);
  return data;
};

export const setPushToken = async (token) => {
  const axiosConfig = setAxiosConfig();
  await axios.put(`${url}/user/me/push`, { token }, axiosConfig);
};
