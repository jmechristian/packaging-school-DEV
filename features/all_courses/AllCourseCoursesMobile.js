import React, { useRef } from 'react';
import AllCourseFilter from './AllCourseFilter';
import Scroller from '../../components/Scroller';
import CourseCard from '../../components/course-card/CourseCard';
import { useSelector } from 'react-redux';

const AllCourseCoursesMobile = ({ coursesToShow }) => {
  const scrollRef = useRef();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='flex flex-col gap-6 scroll-mt-12' id='courses'>
      <AllCourseFilter />
      <Scroller rows='2' scroll={scrollRef}>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div key={course.id} className='inline-block'>
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
                categoryArray={course.categoryArray}
                partOf={course.partOf ? course.partOf : undefined}
                altLink={course.altLink ? course.altLink : undefined}
              />
            </div>
          ))}
      </Scroller>
    </div>
  );
};

export default AllCourseCoursesMobile;
