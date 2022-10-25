import React from 'react';
import { Page } from 'framer';
import { motion } from 'framer-motion';

const Paging = () => {
  return (
    <div>
      <Page>
        <motion.div className='bg-blue-500 w-64 h-64'>1</motion.div>
        <motion.div className='bg-blue-400 w-64 h-64'>2</motion.div>
        <motion.div className='bg-blue-300 w-64 h-64'>3</motion.div>
        <motion.div className='bg-blue-300 w-64 h-64'>4</motion.div>
      </Page>
    </div>
  );
};

export default Paging;
