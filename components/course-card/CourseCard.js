import React from 'react';
import CourseHero from './CourseHero';
import CourseTitle from './CourseTitle';
import CourseDesc from './CourseDesc';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import {
  VideoCameraIcon,
  ArrowSmallRightIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewOpen } from '../../features/all_courses/courseFilterSlice';

const CourseCard = ({
  title,
  desc,
  video,
  hours,
  lessons,
  price,
  slug,
  reset,
  category,
  newWidth,
}) => {
  const dispatch = useDispatch();

  const data = {
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#1f97bf', '#e2e8f0'],
      },
    ],
  };

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
        return 'bg-base-light text-slate-900';
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

  const { darkMode } = useSelector((state) => state.layout);

  const openPreview = () => {
    dispatch(setPreviewOpen(video));
  };

  return (
    // <motion.div
    //   className={`flex flex-col bg-white rounded-md p-3 drop-shadow-lg gap-4 ${
    //     newWidth ? newWidth : 'w-72'
    //   } h-full snap-start cursor-grab`}
    // >
    //   <motion.div className='grid grid-cols-6 gap-3 lg:gap-5 border-b border-b-slate-300 pb-3'>
    //     <CourseHero
    //       video={video}
    //       bgcolor={backgroundColor()}
    //       newWidth={newWidth}
    //     />
    //     <CourseTitle
    //       title={title}
    //       hours={hours}
    //       lessons={lessons}
    //       price={price}
    //       desc={desc}
    //       slug={slug}
    //       data={data}
    //       newWidth={newWidth}
    //     />
    //   </motion.div>
    //   <div className='grid grid-cols-6 pb-1 h-full items-stretch lg:grid'>
    //     <CourseDesc
    //       desc={desc}
    //       slug={slug}
    //       data={data}
    //       reset={reset}
    //       newWidth={newWidth}
    //     />
    //   </div>
    <>
      <motion.div
        className={`w-full ${
          darkMode ? 'bg-slate-900 text-white' : 'bg-white'
        } rounded-xl shadow-lg aspect-1`}
      >
        <div className='p-4 flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div
                className={`${textColor()} uppercase text-xs font-bold py-1.5 rounded px-2 tracking-wide`}
              >
                {category}
              </div>
              <div>
                <StarIcon className='w-6 h-6 text-slate-300 dark:text-slate-700' />
              </div>
            </div>
            <div className='font-semibold text-xl font-greycliff leading-tight line-clamp-2'>
              {title}
            </div>
            <div
              className='line-clamp-3 text-sm desc dark:text-white/60'
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
              <div className='text-sm dark:text-white/50'>{hours} hours</div>
              <div className='font-greycliff text-2xl font-semibold'>
                ${price}
              </div>
            </div>
            <div className='flex gap-2' onClick={openPreview}>
              <div className='w-9 h-9 rounded bg-black/80 flex justify-center items-center'>
                <div>
                  <VideoCameraIcon className='w-5 h-5 text-white' />
                </div>
              </div>
              <div className='w-9 h-9 rounded bg-black/80 flex justify-center items-center'>
                <ArrowSmallRightIcon className='w-5 h-5 text-white' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Tooltip anchorSelect='.desc' />
    </>
  );
};

export default CourseCard;
