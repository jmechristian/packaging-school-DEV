import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  isFixed: false,
  signInModal: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDark: (state) => {
      state.darkMode = true;
    },
    setLight: (state) => {
      state.darkMode = false;
    },
    setFixed: (state) => {
      state.isFixed = true;
    },
    setUnfixed: (state) => {
      state.isFixed = false;
    },
    toggleSignInModal: (state) => {
      state.signInModal = !state.signInModal;
    },
  },
});

export const { setDark, setLight, setFixed, setUnfixed, toggleSignInModal } =
  layoutSlice.actions;

export default layoutSlice.reducer;
