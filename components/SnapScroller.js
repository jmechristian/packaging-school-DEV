import React from 'react';
import { motion } from 'framer-motion';

const SnapScroller = ({ children, title }) => {
  return (
    <motion.div
      className='flex overflow-x-scroll ml-8 snap-x snap-mandatory '
      id='scrollers'
    >
      <motion.div className='flex gap-8'>{children}</motion.div>
    </motion.div>
  );
};

export default SnapScroller;
