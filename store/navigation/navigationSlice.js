import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileMenuOpen: false,
  searchOpen: false,
  sectionInView: '',
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
    setSectionInView: (state, action) => {
      state.sectionInView = action.payload;
    },
  },
});

export const {
  showMobileMenu,
  closeMobileMenu,
  showSearch,
  closeSearch,
  setSectionInView,
} = navSlice.actions;

export default navSlice.reducer;
