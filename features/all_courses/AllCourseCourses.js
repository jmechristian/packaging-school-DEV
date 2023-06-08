import React from 'react';
import CourseCard from '../../components/course-card/CourseCard';
import ScrollButtons from '../../components/ScrollButtons';

const AllCourseCourses = ({ selectedFilter, coursesToShow }) => {
  // console.log(coursesToShow);
  return (
    <div className=' flex flex-col gap-6'>
      <div className='flex justify-between items-end'>
        <div className='font-medium text-xl leading-tight '>
          Browse <span className='font-bold'>{selectedFilter.name}&nbsp;</span>
          Courses
        </div>
        <ScrollButtons />
      </div>
      <div className='relative flex flex-col gap-6 lg:grid lg:grid-cols-3'>
        {coursesToShow.map((course, i) => (
          <div className='block' key={course.id}>
            <CourseCard
              title={course.title}
              desc={course.subheadline}
              video={course.preview}
              hours={course.hours}
              lessons={course.lessons}
              price={course.price}
              slug={course.title}
              category={course.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourseCourses;
