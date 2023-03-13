import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SnapScroller from './SnapScroller';
import CourseCard from './course-card/CourseCard';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const courseVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const SlideUp = ({ open, cycle, title, items }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          layout
          className='fixed z-[100] w-full bottom-0 text-slate-900 flex justify-center items-center drop-shadow-2xl backdrop-blur-md'
          initial={{ y: 340 }}
          animate={{
            y: 0,
            transition: {
              delayChildren: 0.3,
              type: 'spring',
              damping: 40,
              mass: 0.5,
              stiffness: 450,
            },
          }}
          exit={{
            y: 340,
            transition: { delay: 0.4, duration: 0.2 },
          }}
        >
          <motion.div
            layout
            className='relative max-w-[1480px] w-full h-[340px] rounded-t-2xl max-auto bg-slate-800/70 drop-shadow-xl  flex flex-col md:items-center justify-center ring-1 ring-inset ring-white/10 gap-2'
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            <motion.div
              className='relative max-w-[1440px] w-full mx-auto lg:px-6 py-3'
              initial='closed'
              animate='open'
              exit='closed'
              variants={courseVariants}
            >
              <SnapScroller title={title}>
                {items.map((course, i) => (
                  <motion.div
                    className='bg-slate-200 dark:bg-slate-900 shadow-md snap-center rounded-xl'
                    key={course.course.id}
                    variants={courseVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                  >
                    <CourseCard
                      title={course.course.title}
                      desc={course.course.subhead}
                      video={course.course.video}
                      hours={course.course.hour}
                      lessons={course.course.lessons}
                      price={course.course.price}
                      slug={course.course.slug}
                      reset=''
                      category={course.course.category}
                    />
                  </motion.div>
                ))}
              </SnapScroller>
            </motion.div>
            <motion.button
              onClick={cycle}
              initial='closed'
              animate='open'
              exit='closed'
              variants={itemVariants}
            >
              <XMarkIcon className='stroke-slate-200 h-6 w-6 rounded-full absolute right-3 top-3' />
            </motion.button>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default SlideUp;
