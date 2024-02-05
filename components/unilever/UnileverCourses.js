import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import WiredCourseCard from '../shared/WiredCourseCard';

const UnileverCourses = ({ featured, reference }) => {
  return (
    <motion.div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 py-9 overflow-hidden'>
      <WiredCourseCard
        id={'a6769066-eda9-4f8f-aee9-579482d87ce0'}
        reference={reference}
        external={true}
      />
    </motion.div>
  );
};

export default UnileverCourses;
