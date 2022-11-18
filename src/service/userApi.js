import axios from 'axios';

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

const userPost = async (userData) => {
  const infoUser = {
    email: userData.email,
    uid: userData.uid,
    photo: userData.photoURL,
    displayName: userData.displayName,
  };
  const { data } = await axios.post(`${url}/user/signup`, infoUser);
  data.direction = '/validation';
  return data;
};

export const userLogin = async (userData) => {
  const uidGoogle = userData.uid;
  try {
    const { data } = await axios.post(`${url}/user/login`, { uidGoogle });
    if (data.user.validated) {
      data.direction = '/home';
      return data;
    }
    data.direction = '/perfil';
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
  data.direction = '/perfil';
  return data;
};