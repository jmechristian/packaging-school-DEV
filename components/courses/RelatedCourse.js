import React, { useRef } from 'react';
import {
  ClockIcon,
  AcademicCapIcon,
  FilmIcon,
} from '@heroicons/react/24/outline';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import YouTubeEmbed from '../YouTubeEmbed';

const RelatedCourse = ({
  title,
  hours,
  lessons,
  videos,
  categories,
  slug,
  reset,
  embedid,
}) => {
  const router = useRouter();
  const relatedRef = useRef();
  const inView = useInView(relatedRef, { once: 'true' });

  const variants = {
    enter: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 85,
        mass: 1,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const backgroundColor = () => {
    switch (categories[0].category) {
      case 'Material':
        return 'bg-blue-700';
      case 'Industry':
        return 'bg-red-800';
      case 'Design':
        return 'bg-green-800';
      case 'Food & Beverage':
        return 'bg-cyan-900';
      case 'Supply Chain & Logistics':
        return 'bg-fuchsia-700';
      case 'Business':
        return 'bg-violet-800';
    }
  };

  const courseClickHandler = async () => {
    await router.push(`/courses/${slug}`);
    reset();
  };

  return (
    <motion.div
      className='w-60 md:w-80 lg:w-96 rounded-md min-h-full relative'
      ref={relatedRef}
      variants={variants}
      initial='hidden'
      animate={inView ? 'enter' : 'hidden'}
    >
      <div className='flex flex-col w-full'>
        <div className='aspect-video bg-black relative cursor-scroll-all'>
          <YouTubeEmbed embedid={embedid} />
        </div>
        <div className='pt-8 pb-8 flex flex-col gap-1 w-full relative'>
          <div className='flex flex-col gap-2'>
            <div className='font-bold leading-tight'>{title}</div>
            <div className='flex flex-row flex-wrap gap-x-2 md:gap-x-3 md:gap-y-1 items-start'>
              <div className='flex gap-1 items-center'>
                <ClockIcon className='w-4 h-4 stroke-slate-600' />
                <div className='text-slate-600 text-sm'>{hours} Hours</div>
              </div>
              <div className='flex gap-1 items-center'>
                <AcademicCapIcon className='w-4 h-4 stroke-slate-600' />
                <div className='text-slate-600 text-sm'>{lessons} Lessons</div>
              </div>
              <div className='flex gap-1 items-center'>
                <FilmIcon className='w-4 h-4 stroke-slate-600' />
                <div className='text-slate-600 text-sm'>{videos} Videos</div>
              </div>
            </div>
          </div>
          <div
            className='w-10 h-10 cursor-pointer rounded-full bg-base-light dark:bg-slate-100 absolute right-3 -top-5 shadow flex justify-center items-center'
            onClick={courseClickHandler}
          >
            <ArrowSmallRightIcon className='w-6 h-6 fill-slate-900' />
          </div>
        </div>
      </div>
      {/* <div
        className='flex w-full justify-start absolute bottom-0 left-0 cursor-pointer'
        onClick={courseClickHandler}
      >
        <div className='dark:bg-white bg-base-dark hover:border hover:border-black rounded flex gap-1 py-1 px-3 items-center'>
          <div className='uppercase font-semibold text-white dark:text-slate-900 text-xs'>
            View Course
          </div>
          <ArrowSmallRightIcon className='w-4 h-4 dark:stroke-slate-900 stroke-white' />
        </div>
      </div> */}
    </motion.div>
  );
};

export default RelatedCourse;
