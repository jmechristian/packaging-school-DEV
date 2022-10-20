import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileCourseFilter: false,
  selectedFilter: 'all',
};

export const courseFilterSlice = createSlice({
  name: 'course_filter',
  initialState,
  reducers: {
    setMobileFilterOpen: (state) => {
      state.mobileCourseFilter = true;
    },
    setMobileFilterClosed: (state) => {
      state.mobileCourseFilter = false;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { setMobileFilterOpen, setMobileFilterClosed, setSelectedFilter } =
  courseFilterSlice.actions;

export default courseFilterSlice.reducer;
