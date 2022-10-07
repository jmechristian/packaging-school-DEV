import React from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  VideoCameraIcon,
  ArrowDownOnSquareIcon,
} from '@heroicons/react/24/outline';

const CourseItems = ({ data }) => {
  return (
    <div className='border border-white max-w-fit'>
      <div className='py-3 px-5'>
        <div className='flex flex-col gap-3 justify-center text-white font-semibold'>
          <div className='flex items-center gap-3'>
            <VideoCameraIcon className='h-6 w-6 stroke-base-brand' />
            <PrismicLink field={data.course_preview}>
              Preview Course
            </PrismicLink>
          </div>
          <div className='flex gap-3 items-center'>
            <ArrowDownOnSquareIcon className='w-6 h-6 stroke-base-brand' />
            <PrismicLink field={data.course_info_sheet}>
              Information Sheet
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItems;
