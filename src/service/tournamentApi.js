import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;
export const getTournamentsAll = async () => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios(`${url}/tournament/all`, axiosConfig);
  return data;
};

export const createdTournamentsApi = async (dato) => {
  const axiosConfig = setAxiosConfig();
  console.log('asdasdasdasdasdasdasdasdasasdasdasdas');
  console.log(dato);
  try {
    const { data } = await axios.post(`${url}/tournament`, dato, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
    error.error = true;
    return error;
  }
};

export const deleteTournamentsApi = async (id) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.delete(`${url}/tournament/${id}`, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const editTournamentsApi = async (id, update) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.put(`${url}/tournament/${id}`, update, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
  }
};