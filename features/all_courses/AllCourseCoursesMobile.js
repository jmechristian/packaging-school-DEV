import React, { useRef } from 'react';
import AllCourseFilter from './AllCourseFilter';
import Scroller from '../../components/Scroller';
import CourseCard from '../../components/course-card/CourseCard';

const AllCourseCoursesMobile = ({ coursesToShow }) => {
  const scrollRef = useRef();

  return (
    <div className='flex flex-col gap-4 scroll-mt-12' id='courses'>
      <AllCourseFilter />
      <Scroller rows='2' scroll={scrollRef}>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div key={course.id} className='inline-block'>
              <CourseCard
                title={course.title}
                desc={course.subheadline}
                video={course.preview}
                hours={course.hours}
                lessons={course.lessons}
                price={course.price}
                slug={course.title}
                category={course.category}
                reset={null}
              />
            </div>
          ))}
      </Scroller>
    </div>
  );
};

export default AllCourseCoursesMobile;
