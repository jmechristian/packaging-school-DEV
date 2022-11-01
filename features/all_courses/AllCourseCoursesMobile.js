import React, { useRef } from 'react';
import AllCourseFilter from './AllCourseFilter';
import Scroller from '../../components/Scroller';
import CourseCard from '../../components/course-card/CourseCard';

const AllCourseCoursesMobile = ({ coursesToShow }) => {
  const scrollRef = useRef();

  return (
    <div className='flex flex-col gap-4'>
      <AllCourseFilter />
      <Scroller rows='2' scroll={scrollRef}>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div
              key={course.node.course_title[0].text}
              className='inline-block'
            >
              <CourseCard
                title={course.node.course_title[0].text}
                desc={course.node.course_subtitle[0].text}
                video={course.node.embed_id}
                hours={course.node.course_hours}
                lessons={course.node.course_lessons}
                price={course.node.course_price}
                slug={course.node._meta.uid}
                reset={null}
              />
            </div>
          ))}
      </Scroller>
    </div>
  );
};

export default AllCourseCoursesMobile;
