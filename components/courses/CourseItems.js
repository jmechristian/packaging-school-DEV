import React from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  VideoCameraIcon,
  ArrowDownOnSquareIcon,
} from '@heroicons/react/24/outline';

const CourseItems = ({ infoSheet }) => {
  return infoSheet.url ? (
    <div className='dark:border dark:border-slate-700 bg-base-brand dark:bg-slate-900 rounded  max-w-fit'>
      <div className='py-5 px-5'>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-6 justify-center '>
          {infoSheet.url && (
            <div className='flex gap-2 items-center'>
              <ArrowDownOnSquareIcon className='w-6 h-6 stroke-white dark:stroke-base-brand' />
              <PrismicLink
                field={infoSheet}
                className='font-medium uppercase text-white'
              >
                Information Sheet
              </PrismicLink>
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
