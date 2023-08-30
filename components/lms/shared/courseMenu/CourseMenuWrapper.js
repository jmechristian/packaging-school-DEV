import React, { useState } from 'react';
import CourseMenu from './CourseMenu';
import { motion } from 'framer-motion';

const CourseMenuWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
    closed: {
      x: -440,
      opacity: 1,
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        className='fixed z-30 left-0 top-28 bottom-10 overflow-auto'
        id='scrollers'
        variants={variants}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
      >
        <CourseMenu toggle={toggleMenu} />
      </motion.div>
    </>
  );
};

export default CourseMenuWrapper;
