import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
