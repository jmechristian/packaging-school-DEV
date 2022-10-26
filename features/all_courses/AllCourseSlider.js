import React, { useEffect, useRef, useState } from 'react';
import CourseCard from '../../components/course-card/CourseCard';

const AllCourseSlider = ({ coursesToShow }) => {
  const cardRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(cardRef.current.offsetWidth);
  });

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-row gap-6 overflow-y-hidden  ml-6'>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div
              key={course[0].node.course_id}
              className='grid grid-rows-2 gap-8'
              ref={cardRef}
            >
              <CourseCard
                title={course[0].node.course_title[0].text}
                desc={course[0].node.course_subtitle[0].text}
                video={course[0].node.embed_id}
                hours={course[0].node.course_hours}
                lessons={course[0].node.course_lessons}
                price={course[0].node.course_price}
                slug={course[0].node._meta.uid}
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
                />
              )}
            </div>
          ))}
      </div>
      <div className='flex gap-2 w-full justify-center'>
        {coursesToShow.map((_, i) => (
          <div
            className={`h-2.5 w-2.5 ${
              currentIndex === i ? 'bg-slate-700' : 'bg-slate-400'
            } rounded-full`}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AllCourseSlider;
