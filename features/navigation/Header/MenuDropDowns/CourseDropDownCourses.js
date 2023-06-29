import React from 'react';
import CourseMenuBlock from '../../shared/CourseMenuBlock';

const CourseDropDownCourses = ({ onClose }) => {
  return (
    <div className='col-span-2 grid grid-cols-2 px-10 py-10 gap-10'>
      <CourseMenuBlock onClose={onClose} />
    </div>
  );
};

export default CourseDropDownCourses;
