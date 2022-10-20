import React from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  VideoCameraIcon,
  ArrowDownOnSquareIcon,
} from '@heroicons/react/24/outline';

const CourseItems = ({ infoSheet }) => {
  return infoSheet.url ? (
    <div className='button__subtle max-w-fit'>
      <div className='py-3 px-5'>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-6 justify-center '>
          {infoSheet.url && (
            <div className='flex gap-2 items-center'>
              <ArrowDownOnSquareIcon className='w-5 h-5 stroke-slate-700 dark:stroke-base-brand' />
              <PrismicLink field={infoSheet}>Information Sheet</PrismicLink>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default CourseItems;
