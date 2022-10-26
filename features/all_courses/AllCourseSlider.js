import React, { useEffect, useRef, useState } from 'react';
import CourseCard from '../../components/course-card/CourseCard';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setFixed, setUnfixed } from '../layout/layoutSlice';

const AllCourseSlider = ({ coursesToShow }) => {
  const cardRef = useRef();
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth - cardRef.current.scrollWidth);
  }, []);

  return (
    <motion.div className='flex overflow-hidden container__inner' ref={cardRef}>
      <motion.div
        className='grid grid-flow-col grid-rows-2 gap-6'
        drag='x'
        dragConstraints={{ right: 0, left: width, top: 0, bottom: 0 }}
      >
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div key={i} div className='grid'>
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
      </motion.div>
    </motion.div>
  );
};

export default AllCourseSlider;
