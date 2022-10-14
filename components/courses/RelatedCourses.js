import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import RelatedCourse from './RelatedCourse';

const RelatedCourses = ({ related }) => {
  const [width, setWidth] = useState(0);
  const relatedRef = useRef(null);
  const dragX = useMotionValue(0);
  const indicatorWidth = useTransform(dragX, [0, width], ['0%', '100%']);

  useEffect(() => {
    setWidth(relatedRef.current.offsetWidth - relatedRef.current.scrollWidth);
  }, []);

  const resetDrag = () => {
    animate(dragX, 0);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-8'>
        <motion.div
          className='mt-8 px-2 flex flex-col gap-8 overflow-hidden relative'
          ref={relatedRef}
        >
          <motion.div
            className='grid grid-flow-col gap-8 cursor-all-scroll'
            drag='x'
            dragConstraints={{ right: 0, left: width, top: 0, bottom: 0 }}
            dragTransition={{ power: 0.3 }}
            style={{ x: dragX }}
          >
            {related.map((course, i) => (
              <motion.div key={i} className='w-full'>
                <RelatedCourse
                  title={course.related.data.course_title[0].text}
                  hours={course.related.data.course_hours}
                  lessons={course.related.data.course_lessons}
                  videos={course.related.data.course_videos}
                  price={course.related.data.course_price}
                  categories={course.related.data.categories}
                  slug={course.related.uid}
                  reset={resetDrag}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className='flex justify-center'>
          <motion.div className='h-1.5 bg-gray-200 relative w-1/2 rounded-sm'>
            <motion.div
              className='absolute  bg-gradient-to-r from-base-light via-base-mid to-base-dark h-1.5 z-20 rounded-sm'
              style={{ width: indicatorWidth }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;
