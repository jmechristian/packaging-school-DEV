import React from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  VideoCameraIcon,
  ArrowDownOnSquareIcon,
} from '@heroicons/react/24/outline';

const CourseItems = ({ preview, infoSheet }) => {
  return (
    preview.url &&
    infoSheet.url && (
      <div className='border border-white max-w-fit'>
        <div className='py-5 px-5'>
          <div className='flex flex-col md:flex-row gap-4 lg:gap-6 justify-center text-white font-semibold'>
            {preview.url && (
              <div className='flex items-center gap-2'>
                <VideoCameraIcon className='h-6 w-6 stroke-base-brand' />
                <PrismicLink field={preview} className='font-medium uppercase'>
                  Preview Course
                </PrismicLink>
              </div>
            )}
            {infoSheet.url && (
              <div className='flex gap-2 items-center'>
                <ArrowDownOnSquareIcon className='w-6 h-6 stroke-base-brand' />
                <PrismicLink
                  field={infoSheet}
                  className='font-medium uppercase'
                >
                  Information Sheet
                </PrismicLink>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CourseItems;
