import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileMenuOpen: false,
  searchOpen: false,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    showMobileMenu: (state) => {
      state.mobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    showSearch: (state) => {
      state.searchOpen = true;
    },
    closeSearch: (state) => {
      state.searchOpen = false;
    },
  },
});

export const { showMobileMenu, closeMobileMenu, showSearch, closeSearch } =
  navSlice.actions;

export default navSlice.reducer;
