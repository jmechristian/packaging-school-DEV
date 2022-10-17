import React from 'react';
import {
  ClockIcon,
  AcademicCapIcon,
  FilmIcon,
} from '@heroicons/react/24/outline';

const CourseDetails = ({ hours, lessons, videos }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-2'>
        <ClockIcon className='w-7 h-7 stroke-base-dark dark:stroke-base-brand' />
        <div className='black__white text-lg'>{hours} Hours</div>
      </div>
      <div className='flex gap-2'>
        <AcademicCapIcon className='w-7 h-7 stroke-base-dark dark:stroke-base-brand' />
        <div className='black__white text-lg'>{lessons} Lessons</div>
      </div>
      <div className='flex gap-2'>
        <FilmIcon className='w-7 h-7 stroke-base-dark dark:stroke-base-brand' />
        <div className='black__white text-lg'>{videos} Videos</div>
      </div>
    </div>
  );
};

export default CourseDetails;
