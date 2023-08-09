import React from 'react';
import CourseCard from '../../components/course-card/CourseCard';
import ScrollButtons from '../../components/ScrollButtons';
import { useSelector } from 'react-redux';

const AllCourseCourses = ({ selectedFilter, coursesToShow }) => {
  // console.log(coursesToShow);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className=' flex flex-col gap-6 scroll-mt-12'>
      <div className='flex justify-between items-end'>
        <div className='font-medium text-2xl font-greycliff dark:text-white'>
          Browse{' '}
          <span className='font-bold'>
            {selectedFilter.name === 'Collections'
              ? 'Collections'
              : `${selectedFilter.name} Courses`}
            &nbsp;
          </span>
        </div>
      </div>
      <div className='relative flex flex-col gap-6 lg:grid lg:grid-cols-3'>
        {coursesToShow.map((course, i) => (
          <div className='block' key={course.id}>
            <CourseCard
              courseId={course.id}
              title={course.title}
              desc={course.subheadline}
              video={course.preview}
              hours={course.hours}
              lessons={course.lessons}
              price={course.price}
              slug={course.slug}
              category={course.category}
              savedCourses={user?.savedCourses}
              type={course.type ? course.type : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourseCourses;
