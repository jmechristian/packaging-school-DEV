import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout/layoutSlice';
import navReducer from './navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    layout: layoutReducer,
  },
});
