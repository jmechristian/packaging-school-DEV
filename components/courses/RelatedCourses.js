import React, { useState } from 'react';
import RelatedCourse from './RelatedCourse';
import { related } from '../../dummyData';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const RelatedCourses = () => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  const setPage = (newPage, newDirection) => {
    console.log(newDirection);
    if (!newDirection) {
      newDirection = newPage - currentPage;
    }
    setCurrentPage([newPage, newDirection]);
    console.log([currentPage]);
  };

  const xOffset = 100;
  const variants = {
    enter: {
      x: direction > 0 ? xOffset : -xOffset,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 },
    },
    exit: {
      x: direction > 0 ? -xOffset : xOffset,
      opacity: 0,
    },
  };

  const detectDragGesture = (e, { offset }) => {
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      // If user is dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (offset.x > threshold) {
      // Else if the user is dragging right,
      // go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      // Wrap the page index to within the
      // permitted page range
      newPage = wrap(0, related.length, newPage);
      setPage(newPage, offset.x < 0 ? 1 : -1);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='mt-8 flex flex-col items-center relative gap-6 w-[350px] h-80 mx-auto overflow-hidden'>
        <AnimatePresence>
          <motion.div
            className='absolute'
            key={currentPage}
            drag='x'
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={detectDragGesture}
            variants={variants}
            initial='enter'
            animate='active'
            exit='exit'
            custom={direction}
          >
            <RelatedCourse title={related[currentPage].course_title} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='flex flex-row gap-2 justify-center mt-10'>
        {related.map((item, i) => (
          <div
            className={`w-2 h-2 rounded-full ${
              i === currentPage ? 'bg-base-brand' : 'bg-gray-300'
            }`}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
