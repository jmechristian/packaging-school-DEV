import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import SnapScroller from './SnapScroller';

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
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const SlideUp = ({ open, cycle, title }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className='fixed z-[100] w-full bottom-0 text-slate-900 flex justify-center items-center'
          initial={{ height: 0 }}
          animate={{
            height: 330,
          }}
          exit={{
            height: 0,
            transition: { delay: 0.4, duration: 0.3 },
          }}
        >
          <motion.div
            className='relative max-w-7xl w-full h-full rounded-t-xl max-auto bg-slate-400/60 shadow-md dark:bg-black/70 backdrop-blur-md flex items-center'
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            <motion.div
              className='relative max-w-7xl w-full mx-auto px-6 py-3'
              initial='closed'
              animate='open'
              exit='closed'
              variants={itemVariants}
            >
              <SnapScroller title={title}>
                {links.map(({ name, to, id }) => (
                  <motion.div
                    className='bg-slate-700 shadow-md w-[225px] h-[275px] snap-start'
                    key={id}
                  >
                    <motion.a
                      href={to}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      {name}
                    </motion.a>
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
              <XMarkIcon className='stroke-slate-600 h-5 w-5 rounded-full absolute right-2 top-2' />
            </motion.button>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default SlideUp;
