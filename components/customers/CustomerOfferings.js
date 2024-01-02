import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  RocketLaunchIcon,
  SignalIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

import NewCouseCard from '../shared/NewCouseCard';

const CustomerOfferings = ({ featured }) => {
  const { allLessons } = useSelector((state) => state.course_filter);

  const latestLesson = useMemo(() => {
    const lotm =
      allLessons &&
      [...allLessons]
        .filter((less) => less.type === 'LOTM')
        .sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
        });

    return lotm;
  }, [allLessons]);

  return (
    <motion.div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9 overflow-hidden'>
      <NewCouseCard
        title={'SPC’s Bioplastics Topic'}
        description={
          'In this topic, we will explore what bioplastics are and how we can think about them in the context of sustainable packaging.'
        }
        background={
          'https://packschool.s3.amazonaws.com/gb-topic-1-seoImage-sm.png'
        }
        link={
          'https://learn.packagingschool.com/enroll/2753655?price_id=3579258'
        }
        link_text={'Select Topic'}
        Icon={AcademicCapIcon}
        callout={'SPC Knowledge Library'}
        // video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
        // id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
      />
      <NewCouseCard
        title={'Life Cycle Assessment'}
        description={
          'In this topic, we’ll first discuss the foundations of Life Cycle Assessment (LCA) and how it is being used to better understand the environmental impacts of products and packaging.'
        }
        background={
          'https://packschool.s3.amazonaws.com/gb-topic-2-seoImage-sm.png'
        }
        link={
          'https://learn.packagingschool.com/enroll/2794500?price_id=3625661'
        }
        link_text={'Select Topic'}
        Icon={AcademicCapIcon}
        callout={'SPC Knowledge Library'}
        // video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
        // id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
      />
    </motion.div>
  );
};

export default CustomerOfferings;
