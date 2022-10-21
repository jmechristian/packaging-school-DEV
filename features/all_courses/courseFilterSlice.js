import { createSlice } from '@reduxjs/toolkit';
import filter from 'lodash/filter';
import _ from 'lodash';

const initialState = {
  mobileCourseFilter: false,
  selectedFilter: {
    name: 'All',
    value: 'all',
  },
  allCourses: null,
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
    setAllCourses: (state, action) => {
      state.allCourses = action.payload;
    },
  },
});

export const {
  setMobileFilterOpen,
  setMobileFilterClosed,
  setSelectedFilter,
  setAllCourses,
} = courseFilterSlice.actions;

export default courseFilterSlice.reducer;
