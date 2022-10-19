import React, { useRef } from 'react';
import {
  ClockIcon,
  AcademicCapIcon,
  FilmIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import YouTubeEmbed from '../YouTubeEmbed';

const RelatedCourse = ({
  title,
  hours,
  lessons,
  videos,
  price,
  categories,
  slug,
  reset,
  embedid,
}) => {
  const router = useRouter();
  const relatedRef = useRef();
  const inView = useInView(relatedRef);

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
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
      y: 100,
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
      className='w-80 bg-gray-300 rounded-md min-h-full relative'
      ref={relatedRef}
      variants={variants}
      initial='hidden'
      animate={inView ? 'enter' : 'hidden'}
    >
      <div className='flex flex-col w-full'>
        <div className='aspect-video bg-black relative cursor-scroll-all'>
          <YouTubeEmbed embedid={embedid} />
        </div>
        <div className='px-3 pt-5 pb-16 flex flex-col gap-1 w-full relative'>
          <div className='flex flex-col gap-1'>
            <div className='font-bold text-lg'>{title}</div>
            <div className='flex flex-row gap-3 items-center'>
              <div className='flex gap-1 items-center'>
                <ClockIcon className='w-4 h-4 stroke-base-brand' />
                <div className='text-gray-600 text-sm'>{hours} Hours</div>
              </div>
              <div className='flex gap-1 items-center'>
                <AcademicCapIcon className='w-4 h-4 stroke-base-brand' />
                <div className='text-gray-600 text-sm'>{lessons} Lessons</div>
              </div>
              <div className='flex gap-1 items-center'>
                <FilmIcon className='w-4 h-4 stroke-base-brand' />
                <div className='text-gray-600 text-sm'>{videos} Videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex w-full justify-start absolute bottom-3 left-3 cursor-pointer'
        onClick={courseClickHandler}
      >
        <div className='bg-white hover:border hover:border-black rounded flex gap-1 py-1 px-3 items-center'>
          <div className='uppercase font-semibold text-xs'>View Course</div>
          <ArrowSmallRightIcon className='w-4 h-4 stroke-black' />
        </div>
      </div>
    </motion.div>
  );
};

export default RelatedCourse;
