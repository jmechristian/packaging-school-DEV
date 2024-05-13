import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdArrowDropDown,
  MdAccessTimeFilled,
  MdOutlineMenuBook,
  MdLocalGroceryStore,
  MdVideocam,
  MdCancel,
} from 'react-icons/md';

import VideoPlayer from '../VideoPlayer';
import { setColorByCategoryString } from '../../helpers/utils';
import BrutalCircleIconTooltip from './BrutalCircleIconTooltip';
import { registgerCourseClick } from '../../helpers/api';
import { useSelector } from 'react-redux';

const LMCCourseTableItem = ({ course }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { location } = useSelector((state) => state.auth);

  const setCategoryText = (cat) => {
    switch (cat) {
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
        return 'Food & Bev';
      case 'Food & Beverage':
        return 'Food & Bev';
      case 'Supply Chain & Logistics':
        return 'Supply Chain & Logistics';
      case 'SUPPLYCHAIN':
        return 'Supply Chain & Logistics';
      case 'Business':
        return 'Business';
      case 'BUSINESS':
        return 'Business';
      case 'AUTO':
        return 'Automotive';
    }
  };

  const cardClickHandler = async () => {
    await registgerCourseClick(
      course.id,
      router.asPath,
      location,
      course.slug,
      'TABLE'
    );

    course.altLink
      ? window.open(course.altLink, '_blank')
      : router.push(
          `/${
            course.type && course.type === 'COLLECTION'
              ? 'collections'
              : 'courses'
          }/${course.slug}`
        );
  };

  const cardPurchaseHandler = async () => {
    await registgerCourseClick(
      course.id,
      router.asPath,
      location,
      course.link,
      'TABLE'
    );
    window.open(course.link, '_blank');
  };

  return (
    <div
      className={`w-full border-2 border-black ${setColorByCategoryString(
        course.categoryArray[0]
      )} bg-opacity-20 relative group transition-all ease-in cursor-pointer`}
    >
      {/* VIDEO PLAYER */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div className='fixed w-screen h-screen inset-0 bg-black z-50 flex items-center justify-center'>
            <div className='w-full mx-auto max-w-7xl flex flex-col gap-5'>
              <div className='w-full aspect-[16/9] bg-white/50'>
                <VideoPlayer
                  videoEmbedLink={course.preview}
                  light={false}
                  playing={true}
                />
              </div>
              <div
                className='flex items-center justify-center gap-1 cursor-pointer'
                onClick={() => setIsPlaying(false)}
              >
                <div>
                  <MdCancel size={18} color='white' />
                </div>
                <div className='text-white font-semibold text-center text-lg'>
                  Close
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP */}
      {/* MAIN */}

      <div className='hidden lg:grid lg:grid-cols-12 gap-3 divide-x-black w-full px-2 py-2 min-h-[75px]'>
        <div
          className='col-span-4 pl-2 content-center'
          onClick={cardClickHandler}
        >
          <div className='grid grid-cols-4'>
            <div className='col-span-1 text-xs content-center'>
              {course.courseId}
            </div>
            <div className='col-span-3 flex flex-col gap-1'>
              <div className='flex items-center'>
                {course.categoryArray.map((cat, i) => (
                  <div
                    className='flex items-center pl-0.5 pr-0.5 first:pl-0'
                    key={cat}
                  >
                    <div className='text-xs font-semibold leading-tight text-neutral-500 '>
                      {setCategoryText(cat)}
                    </div>
                    {course.categoryArray.length > 1 && i === 0 ? (
                      <div className='text-xs text-neutral-500'>/</div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
              <div className='font-semibold tracking-[-0.01em] leading-tight'>
                {course.title}
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 content-center'>
          <div className='font-semibold text-sm'>
            {course.price === 'FREE' ? 'Free' : '$' + course.price}
          </div>
        </div>
        <div className='flex items-center gap-2 col-span-4 '>
          <div
            className='w-4 h-4 border-2 cursor-pointer border-black bg-white flex items-center justify-center'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${
                isOpen ? 'rotate-180' : 'rotate-0'
              } transition-all ease-in`}
            >
              <MdArrowDropDown size={16} color='black' />
            </div>
          </div>
          <AnimatePresence>
            {isOpen ? (
              <motion.div>
                <div className='content-center'>
                  <div className='text-sm tracking-tight'>
                    {course.subheadline}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div className='content-center'>
                <div className='text-sm tracking-tight line-clamp-2'>
                  {course.subheadline}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className='col-span-3 content-center'>
          <div className='grid grid-cols-4 w-full gap-3 text-center text-sm'>
            <div className='font-bold content-center'>{course.hours}</div>
            <div className='font-bold content-center'>{course.lessons}</div>
            {course.preview ? (
              <div className='content-center mx-auto'>
                <BrutalCircleIconTooltip
                  tooltip={'Preview'}
                  bgColor={'bg-white'}
                  fn={() => setIsPlaying(!isPlaying)}
                >
                  <MdVideocam color='black' size={24} />
                </BrutalCircleIconTooltip>
              </div>
            ) : (
              <div></div>
            )}

            <div className='place-content-center mx-auto'>
              <BrutalCircleIconTooltip
                tooltip={'Buy'}
                bgColor={'bg-brand-green'}
                fn={() => cardPurchaseHandler()}
              >
                <MdLocalGroceryStore color='black' size={24} />
              </BrutalCircleIconTooltip>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {/* MAIN */}
      <div className='flex flex-col lg:hidden'>
        <div className='grid grid-cols-6 min-h-[68px] content-center'>
          <div className='col-span-1 text-xs content-center px-1'>
            {course.courseId}
          </div>
          <div className='col-span-3 flex flex-col gap-0 py-1.5 content-center'>
            <div className='flex flex-col'>
              {course.categoryArray.map((cat, i) => (
                <div
                  className='flex items-center pl-0.5 pr-0.5 first:pl-0'
                  key={cat}
                >
                  <div className='text-xs font-semibold leading-tight text-neutral-500 px-1'>
                    {setCategoryText(cat)}
                  </div>
                </div>
              ))}
            </div>
            <div className='font-semibold tracking-[-0.01em] leading-tight px-1 text-sm md:text-base pr-6'>
              {course.title}
            </div>
          </div>
          <div className='grid grid-cols-3 col-span-2 w-full content-center'>
            <div className='text-xs font-medium col-span-1'>{course.hours}</div>
            <div className='text-xs font-medium col-span-1'>
              {course.lessons}
            </div>
            <div className='text-xs font-medium col-span-1'>
              ${course.price}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div>
              <div className='border-y-2 border-y-black bg-white p-2.5'>
                <div className='text-sm leading-tight'>
                  {course.subheadline}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* INFO BAR */}
        <div
          className={`w-full ${setColorByCategoryString(
            course.categoryArray[0]
          )}`}
        >
          <div className='w-full flex justify-between items-center'>
            <div className='grid grid-cols-3 w-fit gap-5 content-center'>
              <div className='w-6 h-full border-r-2 border-t-2 border-black bg-white flex items-center justify-center'>
                <div
                  className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MdArrowDropDown size={20} />
                </div>
              </div>
              <div className='text-sm text-white font-semibold content-center py-1'>
                {course.price === 'FREE' ? 'FREE' : `$${course.price}`}
              </div>
            </div>
            <div className='flex items-center gap-5 mr-3'>
              {course.preview ? (
                <div
                  className='text-sm text-white/80 font-semibold text-right cursor-pointer'
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                >
                  Preview
                </div>
              ) : (
                <></>
              )}

              <div
                className='text-sm text-white font-semibold text-right cursor-pointer'
                onClick={() => {
                  window.open(course.link, '_blank');
                }}
              >
                Purchase
              </div>
            </div>
          </div>
        </div>
        {/* INFO */}
      </div>
    </div>
  );
};

export default LMCCourseTableItem;
