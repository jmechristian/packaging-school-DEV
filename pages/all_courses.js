import React from 'react';

import AllCoursesMain from '../features/all_courses/AllCoursesMain';

import Head from 'next/head';

const AllCourses = () => {
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
