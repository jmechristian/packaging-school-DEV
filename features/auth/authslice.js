import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loginOpen: true,
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
  },
});

export const { setUser, clearUser, toggleLogin } = authSlice.actions;

export default authSlice.reducer;
