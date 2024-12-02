import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './queryReducer';

const store = configureStore({
  reducer: {
    query: queryReducer,
  },
});

export default store;

