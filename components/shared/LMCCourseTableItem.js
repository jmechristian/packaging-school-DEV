import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdArrowDropDown,
  MdAccessTimeFilled,
  MdOutlineMenuBook,
} from 'react-icons/md';

import { setColorByCategoryString } from '../../helpers/utils';
import BrutalButton from './BrutalButton';

const LMCCourseTableItem = ({ course }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full border-2 border-black ${setColorByCategoryString(
        course.categoryArray[0]
      )} bg-opacity-20`}
    >
      {/* DESKTOP */}
      {/* MAIN */}
      <div className='hidden lg:grid lg:grid-cols-12 gap-5 divide-x-black w-full px-2 py-2'>
        <div className='col-span-4'>
          <div className='flex items-center gap-1'>
            {course.categoryArray.map((cat) => (
              <div
                key={cat}
                className='text-xs font-semibold leading-tight text-neutral-500'
              >
                {cat}
              </div>
            ))}
          </div>
          <div className='text-lg  font-semibold tracking-tight leading-tight'>
            {course.title}
          </div>
        </div>

        <div className='col-span-5'>
          <div className='text-sm line-clamp-3 tracking-tight'>
            {course.subheadline}
          </div>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-3 w-full'>
            <div>Hours</div>
            <div>Lessons</div>
            <div>Preview</div>
            <div className='col-span-3 flex w-full justify-end'>
              <div>
                <BrutalButton
                  text={'Purchase'}
                  link={course.link}
                  background={'bg-white'}
                  textColor={'text-black'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {/* MAIN */}
      <div className='flex flex-col lg:hidden'>
        <div className='flex items-start justify-between'>
          <div className='font-semibold w-fit leading-tight px-2 py-2.5'>
            {course.title}
          </div>
          <div className='w-6 h-6 border-l border-b border-black bg-white flex items-center justify-center'>
            <div
              className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MdArrowDropDown size={20} />
            </div>
          </div>
        </div>
        {/* INFO BAR */}
        <div
          className={`w-full ${setColorByCategoryString(
            course.categoryArray[0]
          )}`}
        >
          <div className='w-full flex justify-between items-center  py-0.5 px-2 '>
            <div className='grid grid-cols-3 w-fit gap-5'>
              <div className='text-sm text-white font-semibold'>
                {course.price === 'FREE' ? 'FREE' : `$${course.price}`}
              </div>
              <div className='flex items-center gap-1'>
                <div className='text-sm text-white font-semibold'>
                  {course.hours ? course.hours : <></>}
                </div>
                <div>
                  <MdAccessTimeFilled size={16} color='white' />
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <div className='text-sm text-white font-semibold'>
                  {course.lessons ? course.lessons : <></>}
                </div>
                <div>
                  <MdOutlineMenuBook size={16} color='white' />
                </div>
              </div>
            </div>
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
        {/* INFO */}
        <AnimatePresence>
          {isOpen && (
            <motion.div>
              <div className='flex bg-white flex-col gap-3 px-2 py-2.5'>
                <div className='text-sm leading-tight'>
                  {course.subheadline}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LMCCourseTableItem;
