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
  preview: false,
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
    setPreviewOpen: (state, action) => {
      state.preview = true;
    },
    setPreviewClosed: (state, action) => {
      state.preview = false;
    },
  },
});

export const {
  setMobileFilterOpen,
  setMobileFilterClosed,
  setSelectedFilter,
  setAllCourses,
  setPreviewOpen,
  setPreviewClosed,
} = courseFilterSlice.actions;

export default courseFilterSlice.reducer;
