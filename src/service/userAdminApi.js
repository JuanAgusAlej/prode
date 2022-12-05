/* eslint-disable comma-dangle */
import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;
export const getUsersAll = async () => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios(`${url}/user`, axiosConfig);
  return data;
};
export const deleteUser = async (id) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.put(
      `${url}/user/${id}/status`,
      {},
      axiosConfig
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const changeRolUserApi = async (id) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.put(`${url}/user/${id}/role`, {}, axiosConfig);
    return data;
  } catch (error) {
    console.error(error);
  }
};
