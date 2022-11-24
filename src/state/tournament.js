import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  tournament: null,
};

const url = process.env.REACT_APP_URL;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    token: localStorage.getItem('token'),
  },
};

export const getTournament = createAsyncThunk('GET_TOURNAMENT', async () => {
  try {
    const tournament = await axios.get(`${url}/tournament`, axiosConfig);
    return tournament.data;
  } catch (e) {
    throw new Error(e.message);
  }
});

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {},
  extraReducers: {
    [getTournament.pending]: state => {
      state.isLoading = true;
    },
    [getTournament.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.tournament = action.payload;
    },
    [getTournament.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default tournamentSlice.reducer;
