import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loginOpen: true,
  location: {
    ip: null,
    country: null,
    lat: null,
    long: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    toggleLogin: (state) => {
      state.loginOpen = !state.loginOpen;
    },
    setLocation: (state, action) => {
      state.location.ip = action.payload.ip;
      state.location.country = action.payload.country;
      state.location.lat = action.payload.lat;
      state.location.long = action.payload.long;
    },
  },
});

export const { setUser, clearUser, toggleLogin, setLocation } =
  authSlice.actions;

export default authSlice.reducer;
