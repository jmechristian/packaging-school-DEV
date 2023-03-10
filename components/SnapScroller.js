import React from 'react';
import { motion } from 'framer-motion';

const SnapScroller = ({ children, title }) => {
  return (
    <motion.div className='overflow-x-scroll snap-x px-6' id='scrollers'>
      <motion.div className='grid grid-flow-col gap-8'>{children}</motion.div>
    </motion.div>
  );
};

export default SnapScroller;
