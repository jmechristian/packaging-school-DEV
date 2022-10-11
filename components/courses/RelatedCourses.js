import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import RelatedCourse from './RelatedCourse';
import { related } from '../../dummyData';

const RelatedCourses = () => {
  const [width, setWidth] = useState(0);
  const relatedRef = useRef(null);

  useEffect(() => {
    setWidth(relatedRef.current.offsetWidth - relatedRef.current.scrollWidth);
  }, []);

  const dragX = useMotionValue(0);
  const indicatorWidth = useTransform(dragX, [0, width], ['0%', '100%']);

  return (
    <motion.div
      className='mt-8 flex flex-col gap-6 overflow-hidden'
      ref={relatedRef}
    >
      <motion.div
        className='flex flex-row gap-8'
        drag='x'
        dragConstraints={{ right: 0, left: width }}
        dragTransition={{ power: 0.3 }}
        style={{ x: dragX }}
      >
        {related.map((item, i) => (
          <motion.div key={i} className='w-full'>
            <RelatedCourse title={item.course_title} />
          </motion.div>
        ))}
      </motion.div>
      <div className='flex flex-row gap-2 justify-center'>
        <motion.div className='h-1.5 bg-gray-300 relative w-1/2 mt-2'>
          <motion.div
            className='absolute  bg-gradient-to-r from-base-light via-base-mid to-base-dark h-16 z-20'
            style={{ width: indicatorWidth }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RelatedCourses;
