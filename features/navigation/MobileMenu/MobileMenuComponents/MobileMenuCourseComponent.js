import React from 'react';
import CourseMenuBlock from '../../shared/CourseMenuBlock';
import MobileMenuCoursesCallout from './MobileMenuCoursesCallout';

const MobileMenuCourseComponent = () => {
  return (
    <div className='flex flex-col gap-8 py-6 bg-slate-100'>
      <div className='flex flex-col gap-8 px-6 md:px-9'>
        <CourseMenuBlock />
      </div>
      <div className='flex flex-col px-6 md:px-9'>
        <MobileMenuCoursesCallout />
      </div>
    </div>
  );
};

export default MobileMenuCourseComponent;
