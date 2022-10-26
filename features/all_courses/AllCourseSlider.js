import React, { useEffect, useRef } from 'react';
import CourseCard from '../../components/course-card/CourseCard';

const AllCourseSlider = ({ coursesToShow }) => {
  const cardRef = useRef();

  return (
    <div className='flex flex-row gap-6 overflow-clip ml-6'>
      {coursesToShow &&
        coursesToShow.map((course, i) => (
          <div
            key={course[0].node.course_id}
            className='grid grid-rows-2 gap-8'
          >
            <CourseCard
              title={course[0].node.course_title[0].text}
              desc={course[0].node.course_subtitle[0].text}
              video={course[0].node.embed_id}
              hours={course[0].node.course_hours}
              lessons={course[0].node.course_lessons}
              price={course[0].node.course_price}
              slug={course[0].node._meta.uid}
              ref={cardRef}
            />
            {course[1] && (
              <CourseCard
                title={course[1].node.course_title[0].text}
                desc={course[1].node.course_subtitle[0].text}
                video={course[1].node.embed_id}
                hours={course[1].node.course_hours}
                lessons={course[1].node.course_lessons}
                price={course[1].node.course_price}
                slug={course[1].node._meta.uid}
                ref={cardRef}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default AllCourseSlider;
