import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tournament from './tournament';
import user from './user';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    tournament,
    user,
  },
});

export default store;
