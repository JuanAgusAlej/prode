import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

export const getTeamsAll = async () => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios(`${url}/teams`, axiosConfig);
  return data;
};

export const deleteTeamApi = async (id) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.delete(`${url}/teams/${id}`, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const editTeamApi = async (id, update) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.put(`${url}/teams/${id}`, update, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createdTeamApi = async (dato) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.post(`${url}/teams`, dato, axiosConfig);
    return data;
  } catch (error) {
    console.log('4562354');
    console.log(error);
    error.error = true;
    return error;
  }
};
