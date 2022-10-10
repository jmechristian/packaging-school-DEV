import React, { useState } from 'react';
import RelatedCourse from './RelatedCourse';
import { related } from '../../dummyData';
import { AnimatePresence, motion } from 'framer-motion';

const RelatedCourses = () => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [direction, setDirection] = useState(-1);

  const moveBack = () => {
    if (courseIndex === 0) {
      return;
    } else {
      setDirection(1);
      setCourseIndex(courseIndex - 1);
    }
  };

  const moveForward = () => {
    if (courseIndex === related.length - 1) {
      return;
    } else {
      setDirection(-1);
      setCourseIndex(courseIndex + 1);
    }
  };

  const variants = {
    enter: {
      opacity: 0,
      x: direction > 0 ? 400 : -400,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      x: direction < 0 ? 400 : -400,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='mt-8 flex flex-col items-center relative gap-6 w-[350px] h-80 mx-auto overflow-hidden'>
        <AnimatePresence>
          <motion.div
            className='absolute'
            key={courseIndex}
            drag='x'
            variants={variants}
            initial='enter'
            animate='active'
            exit='exit'
            onDragEnd={(_, info) => {
              console.log(info.offset.x);
              if (info.offset.x > 50) {
                moveForward();
              } else if (info.offset.x < 0) {
                moveBack();
              }
            }}
            dragConstraints={{ left: 0, right: 0 }}
          >
            <RelatedCourse title={related[courseIndex].course_title} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='flex flex-row gap-2 justify-center mt-10'>
        {related.map((item, i) => (
          <div
            className={`w-2 h-2 rounded-full ${
              i === courseIndex ? 'bg-base-brand' : 'bg-gray-300'
            }`}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
