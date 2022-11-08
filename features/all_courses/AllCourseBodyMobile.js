import React from 'react';
import AllCourseCertMobile from './AllCourseCertMobile';
import AllCourseCoursesMobile from './AllCourseCoursesMobile';
import AllCourseSearch from './AllCourseSearch';

const AllCourseBodyMobile = ({ coursesToShow }) => {
  return (
    <div className='flex flex-col gap-10 py-8 relative lg:hidden'>
      <div className='flex flex-col gap-4 container__inner'>
        <AllCourseSearch />
      </div>
      <AllCourseCertMobile />
      <AllCourseCoursesMobile coursesToShow={coursesToShow} />
    </div>
  );
};

export default AllCourseBodyMobile;
