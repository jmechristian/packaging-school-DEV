import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
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
  },
});

export const { setDark, setLight } = layoutSlice.actions;

export default layoutSlice.reducer;
