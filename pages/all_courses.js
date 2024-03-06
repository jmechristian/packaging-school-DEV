import React, { useEffect } from 'react';

import AllCoursesMain from '../features/all_courses/AllCoursesMain';

import Head from 'next/head';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedFilter } from '../features/all_courses/courseFilterSlice';
import Meta from '../components/shared/Meta';

const AllCourses = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Meta
        title={'Packaging School Courses'}
        description={
          'Industry-leading online packaging courses in materials, design, business, and more, taught by subject matter experts. Elevate your skills. Enroll today!'
        }
        image={'https://packschool.s3.amazonaws.com/allcourse-seo.webp'}
      />
      <AllCoursesMain />
    </>
  );
};

export default AllCourses;
