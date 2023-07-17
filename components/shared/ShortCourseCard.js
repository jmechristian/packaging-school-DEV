import React from 'react';
import { motion } from 'framer-motion';
import {
  VideoCameraIcon,
  ArrowSmallRightIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

const ShortCourseCard = () => {
  return (
    <motion.div className='w-full max-w-[300px] lg:max-w-[350px] dark:bg-dark-mid text-white bg-slate-200 rounded-xl shadow-lg aspect-1'>
      <div className='p-4 flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <div
              className={`${textColor()} uppercase text-xs font-bold py-1.5 rounded px-2 tracking-wide`}
            >
              {categoryText()}
            </div>
          </div>
          <div className='font-semibold text-xl font-greycliff leading-tight line-clamp-2 text-slate-900 dark:text-white'>
            {title}
          </div>
          <div
            className='line-clamp-3 text-sm desc dark:text-white/60 text-slate-700'
            data-tooltip-content={desc}
          >
            {desc}
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className='flex justify-between items-end'>
          <div className='flex flex-col'>
            <div className='text-sm dark:text-white/50 text-slate-700'>
              {hours} hours
            </div>
            <div className='font-greycliff text-2xl font-semibold text-slate-900 dark:text-white'>
              {price === 'FREE' ? 'Free' : '$' + price}
            </div>
          </div>
          <div className='flex gap-2'>
            <div
              className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'
              onClick={openPreview}
            >
              <div>
                <VideoCameraIcon className='w-5 h-5 text-white' />
              </div>
            </div>
            <div
              className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'
              onClick={() => router.push(`/courses/${slug}`)}
            >
              <ArrowSmallRightIcon className='w-5 h-5 text-white' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShortCourseCard;
