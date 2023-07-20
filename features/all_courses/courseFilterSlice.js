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
  allLessons: null,
  allArticles: null,
  preview: false,
  embedId: '',
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
    setAllLessons: (state, action) => {
      state.allLessons = action.payload;
    },
    setAllArticles: (state, action) => {
      state.allArticles = action.payload;
    },
    setPreviewOpen: (state, action) => {
      state.preview = true;
      state.embedId = action.payload;
    },
    setPreviewClosed: (state, action) => {
      state.preview = false;
      state.embedId = '';
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
  setAllLessons,
  setAllArticles,
} = courseFilterSlice.actions;

export default courseFilterSlice.reducer;
