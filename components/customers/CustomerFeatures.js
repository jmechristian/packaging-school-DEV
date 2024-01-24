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
import WiredCourseCard from '../shared/WiredCourseCard';
import WiredLessonCard from '../shared/WiredLessonCard';
import WiredLessonCardToo from '../shared/WiredLessonCardToo';

const CustomerFeatures = ({ courses }) => {
  const { allLessons, allCourses } = useSelector(
    (state) => state.course_filter
  );

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

  const mostPopularCourse = useMemo(() => {
    const pop = courses && [...courses].sort((a, b) => b.clicks - a.clicks);

    const popCourse =
      allCourses && allCourses.filter((c) => c.id === pop[0].courseId);

    return popCourse;
  }, [courses, allCourses]);

  return (
    <motion.div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9 overflow-hidden'>
      <WiredCourseCard
        id={'5fc017b2-2149-40d7-a6d2-272afad2c4e3'}
        external={true}
        link_text={'Select Course'}
        Icon={AcademicCapIcon}
        callout={'SPC Knowledge Library'}
      />
      <WiredCourseCard
        id={'ff174f01-5f76-486c-8d7a-849d6d3ff914'}
        external={true}
        Icon={AcademicCapIcon}
        callout={'Packaging School Course'}
        reference={'ref=ac65d9'}
      />
      <WiredLessonCardToo
        id={latestLesson && latestLesson[0].id}
        Icon={SignalIcon}
        callout={'Latest Lesson'}
        link_text={'View Lesson'}
      />
      {/* <NewCouseCard
        title={latestLesson && latestLesson[0].title}
        description={latestLesson && latestLesson[0].subhead}
        background={latestLesson && latestLesson[0].seoImage}
        link={`/lessons/${latestLesson && latestLesson[0].slug}`}
        link_text={'View Lesson'}
        Icon={SignalIcon}
        callout={'Latest Lesson'}
      /> */}
    </motion.div>
  );
};

export default CustomerFeatures;
