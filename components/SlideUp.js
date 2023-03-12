import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SnapScroller from './SnapScroller';
import CourseCard from './course-card/CourseCard';

const links = [
  { name: 'Home', to: '#', id: 1 },
  { name: 'About', to: '#', id: 2 },
  { name: 'Blog', to: '#', id: 3 },
  { name: 'Contact', to: '#', id: 4 },
  { name: 'Home', to: '#', id: 5 },
  { name: 'About', to: '#', id: 6 },
  { name: 'Blog', to: '#', id: 7 },
  { name: 'Contact', to: '#', id: 8 },
];

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
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const courseVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1, transition: { delay: 0.2 } },
};

const SlideUp = ({ open, cycle, title }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          layout
          className='fixed z-[100] w-full bottom-0 text-slate-900 flex justify-center items-center drop-shadow-2xl backdrop-blur-md'
          initial={{ height: 0 }}
          animate={{
            height: 340,
            transition: { delayChildren: 0.5 },
          }}
          exit={{
            height: 0,
            transition: { delay: 0.4, duration: 0.3 },
          }}
        >
          <motion.div
            className='relative max-w-[1480px] w-full h-full rounded-t-2xl max-auto bg-slate-800 drop-shadow-xl dark:bg-slate-800 flex flex-col md:items-center justify-center dark:ring-1 dark:ring-inset dark:ring-white/10 gap-2'
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            <motion.div
              className='relative max-w-[1440px] w-full mx-auto lg:px-6 py-3'
              initial='open'
              animate='open'
              exit='closed'
              variants={courseVariants}
            >
              <SnapScroller title={title}>
                {links.map(({ name, to, id }) => (
                  <motion.div
                    className='bg-slate-200 dark:bg-slate-900 shadow-md snap-start rounded-xl'
                    key={id}
                  >
                    <CourseCard
                      title='Glass and Metal Packaging'
                      desc='2 for the price of one – this course includes lessons, quizzes, and exams in both glass and metal packaging. This eLearning course goes into detail on'
                      video=''
                      hours={6}
                      lessons={52}
                      price='399'
                      slug='local/all_courses'
                      reset=''
                      category='Materials'
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
