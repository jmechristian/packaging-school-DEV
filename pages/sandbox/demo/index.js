import React from 'react';
import CardThree from '../../../components/cards/CardThree';
import { AnimatePresence, motion } from 'framer-motion';

const index = () => {
  return (
    <div className='w-full h-full flex items-center justify-center min-h-[600px]'>
      <AnimatePresence>
        <motion.div layoutId='card'>
          <CardThree id={'ff174f01-5f76-486c-8d7a-849d6d3ff914'} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default index;
