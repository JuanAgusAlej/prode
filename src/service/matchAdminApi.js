/* eslint-disable comma-dangle */
import axios from 'axios';
import { setAxiosConfig } from '../utils/axiosConfig';

const url = process.env.REACT_APP_URL;

export const getAll = async (tournamentId) => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios(
    `${url}/tournament/${tournamentId}/match`,
    axiosConfig
  );
  return data;
};

export const addMatch = async (tournamentId, match) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.post(
      `${url}/tournament/${tournamentId}/match`,
      match,
      axiosConfig
    );
    return data;
  } catch (e) {
    return e.response.data;
  }
};

export const deleteMatch = async (tournamentId, matchId) => {
  const axiosConfig = setAxiosConfig();
  const { data } = await axios.delete(
    `${url}/tournament/${tournamentId}/match/${matchId}`,
    axiosConfig
  );
  return data;
};

export const setMatchResults = async (
  tournamentId,
  matchId,
  goalsA,
  goalsB
) => {
  const axiosConfig = setAxiosConfig();
  try {
    const { data } = await axios.put(
      `${url}/tournament/${tournamentId}/match/${matchId}/results`,
      { goalsA, goalsB },
      axiosConfig
    );
    return data;
  } catch (e) {
    return e.response.data;
  }
};
