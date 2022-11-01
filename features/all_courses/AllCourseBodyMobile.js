import React from 'react';
import AllCourseCertMobile from './AllCourseCertMobile';
import AllCourseCoursesMobile from './AllCourseCoursesMobile';
import AllCourseSearch from './AllCourseSearch';

const AllCourseBodyMobile = ({ coursesToShow }) => {
  return (
    <div className='flex flex-col gap-10 py-8 relative lg:hidden'>
      <div className='flex flex-col gap-4 container__inner'>
        <div className='text-2xl md:text-3xl font-bold font-plex mb-4'>
          <h2>Accelerate your career. Stand out amongst your peers.</h2>
        </div>
        <AllCourseSearch />
      </div>
      <AllCourseCertMobile />
      <AllCourseCoursesMobile coursesToShow={coursesToShow} />
    </div>
  );
};

export default AllCourseBodyMobile;
