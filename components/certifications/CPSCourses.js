import React from 'react';

const CPSCourses = ({ courses }) => {
  return (
    <div className='flex gap-8'>
      {courses &&
        courses.map((course, i) => (
          <div key={course.course.id}>{course.course.title}</div>
        ))}
    </div>
  );
};

export default CPSCourses;
