import React, { useEffect, useRef, useState } from 'react';
import CourseCard from '../../components/course-card/CourseCard';
import { motion } from 'framer-motion';

const AllCourseSlider = ({ coursesToShow }) => {
  const cardRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth - cardRef.current.scrollWidth);
  }, []);

  return (
    <motion.div className='overflow-auto' ref={cardRef}>
      <motion.div
        className='gap-6 grid grid-flow-col grid-rows-2 container__inner'
        drag='x'
        dragConstraints={{ right: 0, left: width, top: 0, bottom: 0 }}
      >
        {coursesToShow.map((course, i) => (
          <motion.div key={i} className='h-full'>
            <CourseCard
              title={course.node.course_title[0].text}
              desc={course.node.course_subtitle[0].text}
              video={course.node.embed_id}
              hours={course.node.course_hours}
              lessons={course.node.course_lessons}
              price={course.node.course_price}
              slug={course.node._meta.uid}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AllCourseSlider;
