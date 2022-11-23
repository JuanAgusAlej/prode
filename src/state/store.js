import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tournament from './tournament';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    tournament,
  },
});

export default store;
