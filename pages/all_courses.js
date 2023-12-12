import React, { useEffect } from 'react';

import AllCoursesMain from '../features/all_courses/AllCoursesMain';

import Head from 'next/head';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedFilter } from '../features/all_courses/courseFilterSlice';

const AllCourses = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Packaging School | All Course</title>
        <meta
          property='og:title'
          content='Packaging School | All Courses'
          key='title'
        />
      </Head>
      <AllCoursesMain />
    </>
  );
};

export default AllCourses;
