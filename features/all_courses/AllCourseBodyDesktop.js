import React from 'react';
import AllCourseMenu from './AllCourseMenu';
import CourseCard from '../../components/course-card/CourseCard';

const AllCourseBodyDesktop = ({ coursesToShow }) => {
  return (
    <div className='w-full h-full relative hidden lg:flex gap-20 container__inner py-12'>
      <div className='w-1/3'>
        <div className='w-full'>
          <AllCourseMenu />
        </div>
      </div>
      <div className='w-2/3'>
        <div className='relative flex flex-col gap-6'>
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
    </div>
  );
};

export default AllCourseBodyDesktop;
