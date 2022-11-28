import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  userData: null,
};

const url = process.env.REACT_APP_URL;
const setAxiosConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      token: localStorage.getItem('token'),
    },
  };
};

export const getUser = createAsyncThunk('GET_USER', async () => {
  try {
    const axiosConfig = setAxiosConfig();
    const user = await axios.get(`${url}/user/me`, axiosConfig);
    return user.data;
  } catch (e) {
    throw new Error(e.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.pending]: state => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    [getUser.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
