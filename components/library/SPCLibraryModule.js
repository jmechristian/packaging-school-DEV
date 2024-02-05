import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  RocketLaunchIcon,
  SignalIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

import WiredCourseCard from '../shared/WiredCourseCard';

const SPCLibraryModule = ({ featured, reference, path }) => {
  return (
    <motion.div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 py-9'>
      <WiredCourseCard
        id={'5fc017b2-2149-40d7-a6d2-272afad2c4e3'}
        reference={reference}
      />
      <WiredCourseCard
        id={'13c3013a-a246-4a02-b974-9d2e6c2254df'}
        reference={reference}
      />
      {path === '/unilever' ? (
        <WiredCourseCard
          id={'02a237f0-3709-4c3a-8e02-47e04d8f1977'}
          reference={reference}
        />
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default SPCLibraryModule;
