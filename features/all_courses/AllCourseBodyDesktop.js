import React, { useEffect, useRef } from 'react';
import AllCourseMenu from './AllCourseMenu';
import AllCourseCert from './AllCourseCert';
import { useSelector } from 'react-redux';
import AllCourseCourses from './AllCourseCourses';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedFilter } from './courseFilterSlice';

const AllCourseBodyDesktop = ({ coursesToShow }) => {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state) => state.course_filter);
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
    <div className='w-full h-full relative hidden lg:flex gap-16 container-7xl py-20'>
      <div className='w-fit'>
        <div className='w-full sticky top-32'>
          <AllCourseMenu click={scrollToCourses} />
        </div>
      </div>
      <div className='flex max-w-5xl flex-col gap-16'>
        <AllCourseCert />
        <div ref={coursesRef} className='scroll-mt-16'>
          <AllCourseCourses
            coursesToShow={coursesToShow}
            selectedFilter={selectedFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCourseBodyDesktop;
