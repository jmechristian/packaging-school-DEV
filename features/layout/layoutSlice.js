import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
  fixed: false,
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
      state.fixed = true;
    },
    setUnfixed: (state) => {
      state.fixed = false;
    },
  },
});

export const { setDark, setLight, setFixed, setUnfixed } = layoutSlice.actions;

export default layoutSlice.reducer;
