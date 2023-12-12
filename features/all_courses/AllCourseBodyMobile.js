import React, { useEffect, useRef } from 'react';
import AllCourseCertMobile from './AllCourseCertMobile';
import AllCourseCoursesMobile from './AllCourseCoursesMobile';
import AllCourseSearch from './AllCourseSearch';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedFilter } from './courseFilterSlice';

const AllCourseBodyMobile = ({ coursesToShow }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const coursesRef = useRef();

  useEffect(() => {
    if (router.asPath === '/all_courses#courses') {
      coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router]);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (router.query.cat === 'automotive') {
      dispatch(setSelectedFilter({ name: 'Automotive', value: 'AUTO' }));
      scrollToCourses();
    }
  }, [router.query, dispatch]);

  return (
    <div className='flex flex-col gap-16 py-8 relative lg:hidden'>
      <AllCourseCertMobile />
      <div ref={coursesRef} className='scroll-mt-16'>
        <AllCourseCoursesMobile coursesToShow={coursesToShow} />
      </div>
    </div>
  );
};

export default AllCourseBodyMobile;
