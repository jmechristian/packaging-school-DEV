import React from 'react';
import CourseCard from '../../components/course-card/CourseCard';
import ScrollButtons from '../../components/ScrollButtons';

const AllCourseCourses = ({ selectedFilter, coursesToShow }) => {
  return (
    <div className=' flex flex-col gap-6'>
      <div className='flex justify-between items-end'>
        <div className='font-medium text-xl leading-tight '>
          Browse <span className='font-bold'>{selectedFilter.name}&nbsp;</span>
          Courses
        </div>
        <ScrollButtons />
      </div>
      <div className='relative flex flex-col gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3'>
        {coursesToShow.map((course, i) => (
          <div className='block' key={course.node.course_title[0].text}>
            <CourseCard
              title={course.node.course_title[0].text}
              desc={course.node.course_subtitle[0].text}
              video={course.node.embed_id}
              hours={course.node.course_hours}
              lessons={course.node.course_lessons}
              price={course.node.course_price}
              slug={course.node._meta.uid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourseCourses;
