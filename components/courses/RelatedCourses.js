import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RelatedCourse from './RelatedCourse';
import { related } from '../../dummyData';

const RelatedCourses = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(relatedRef.current.offsetWidth - relatedRef.current.scrollWidth);
  }, []);

  const relatedRef = useRef();
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
      >
        {related.map((item, i) => (
          <motion.div key={i} className='w-full'>
            <RelatedCourse title={item.course_title} />
          </motion.div>
        ))}
      </motion.div>
      <div className='flex flex-row gap-2 justify-center'></div>
    </motion.div>
  );
};

export default RelatedCourses;
