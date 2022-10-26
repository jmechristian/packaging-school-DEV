import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
  isFixed: false,
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
  },
});

export const { setDark, setLight, setFixed, setUnfixed } = layoutSlice.actions;

export default layoutSlice.reducer;
