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

const CustomerFeatures = ({ featured }) => {
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
        background={'https://packschool.s3.amazonaws.com/spc-seoImage-2.png'}
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
        title={'Packaging Boot Camp 101'}
        description={
          'Want a solid foundation in packaging basics? This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed. '
        }
        background={'https://packschool.s3.amazonaws.com/bootcamp-seoImage.png'}
        link={'https://learn.packagingschool.com/enroll/887760'}
        link_text={'Select Course'}
        Icon={SparklesIcon}
        callout={'Most Popular'}
        video={
          'https://player.vimeo.com/video/402952067?h=b90f627eee&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        }
      />
      <NewCouseCard
        title={latestLesson && latestLesson[0].title}
        description={latestLesson && latestLesson[0].subhead}
        background={latestLesson && latestLesson[0].seoImage}
        link={`/lessons/${latestLesson && latestLesson[0].slug}`}
        link_text={'View Lesson'}
        Icon={SignalIcon}
        callout={'Latest Lesson'}
      />
    </motion.div>
  );
};

export default CustomerFeatures;
