/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

const userPost = async userData => {
  const infoUser = {
    email: userData.email,
    uid: userData.uid,
    avatar: userData.photoURL,
    name: userData.displayName,
  };
  const { data } = await axios.post(`${url}/user/signup`, infoUser);
  localStorage.setItem('token', data.token);
  await axios.post(`${url}/email`, { id: data._id, email: infoUser.email });
  data.direction = '/validation';
  return data;
};

export const userLogin = async userData => {
  const { uid } = userData;
  try {
    const { data } = await axios.post(`${url}/user/login`, { uid });
    if (data.user.validated) {
      data.direction = '/home';
      return data;
    }
    data.direction = `/profile/${data._id}`;
    return data;
  } catch (error) {
    const data = await userPost(userData);
    return data;
  }
};

export const tokenValidated = async () => {
  const { data } = await axios(`${url}/user/me`, axiosConfig);
  if (data.validated) {
    data.direction = '/home';
    return data;
  }
  data.direction = `/profile/${data._id}`;
  return data;
};

export const modifyUser = async obj => {
  const { data } = await axios.put(`${url}/user/me`, obj, axiosConfig);
  return data;
};
