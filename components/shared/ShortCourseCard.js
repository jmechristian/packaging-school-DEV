import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowSmallRightIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { setPreviewOpen } from '../../features/all_courses/courseFilterSlice';
import { useRouter } from 'next/router';

const ShortCourseCard = ({
  title,
  category,
  desc,
  price,
  slug,
  hours,
  video,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const textColor = () => {
    switch (category) {
      case 'Materials':
        return 'bg-base-dark text-white';
      case 'MATERIALS':
        return 'bg-base-dark text-white';
      case 'Industry':
        return 'bg-base-brand';
      case 'INDUSTRY':
        return 'bg-base-brand text-white';
      case 'Design':
        return 'bg-clemson';
      case 'DESIGN':
        return 'bg-clemson';
      case 'FOODANDBEVERAGE':
        return 'bg-base-light dark:bg-base-light text-slate-900';
      case 'Food & Beverage':
        return 'bg-base-light text-slate-900';
      case 'Supply Chain & Logistics':
        return 'bg-clemson-dark text-white';
      case 'SUPPLYCHAIN':
        return 'bg-clemson-dark text-white';
      case 'Business':
        return 'bg-green-600';
      case 'BUSINESS':
        return 'bg-green-600';
    }
  };

  const categoryText = () => {
    switch (category) {
      case 'Materials':
        return 'Materials';
      case 'MATERIALS':
        return 'Materials';
      case 'Industry':
        return 'Industry';
      case 'INDUSTRY':
        return 'Industry';
      case 'Design':
        return 'Design';
      case 'DESIGN':
        return 'Design';
      case 'FOODANDBEVERAGE':
        return 'Food & Beverage';
      case 'Food & Beverage':
        return 'Food & Beverage';
      case 'Supply Chain & Logistics':
        return 'Supply Chain & Logistics';
      case 'SUPPLYCHAIN':
        return 'Supply Chain & Logistics';
      case 'Business':
        return 'Business';
      case 'BUSINESS':
        return 'Business';
    }
  };

  const openPreview = () => {
    dispatch(setPreviewOpen(video));
  };

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
          <div className='line-clamp-3 text-sm desc dark:text-white/60 text-slate-700'>
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
            {video && (
              <div
                className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'
                onClick={openPreview}
              >
                <div>
                  <VideoCameraIcon className='w-5 h-5 text-white' />
                </div>
              </div>
            )}
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
