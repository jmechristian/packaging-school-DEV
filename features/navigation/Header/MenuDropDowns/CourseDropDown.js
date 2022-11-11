import React from 'react';
import CourseDropDownCallout from './CourseDropDownCallout';
import CourseDropDownCourses from './CourseDropDownCourses';

const CourseDropDown = () => {
  return (
    <div className='grid grid-cols-3 h-full overflow-hidden gap-10'>
      <CourseDropDownCourses />
      <CourseDropDownCallout />
    </div>
  );
};

export default CourseDropDown;
