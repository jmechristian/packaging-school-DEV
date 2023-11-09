import React from 'react';
import CourseCardVideoHeader from '../shared/CourseCardVideoHeader';

import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

const UnileverCourses = ({ supportLinks }) => {
  return (
    <motion.section className='px-0 lg:px-6 w-full flex flex-col gap-6'>
      <div className='border-y border-y-neutral-400'>
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center gap-1.5'>
            <div>
              <MagnifyingGlassIcon className='w-5 h-5 fill-neutral-500' />
            </div>
            <div className='uppercase text-sm text-neutral-500 text-small font-semibold'>
              Search
            </div>
          </div>
          <div className='flex items-center gap-1.5'>
            <div className='uppercase text-sm text-neutral-500 text-small font-semibold'>
              Sort
            </div>
            <div>
              <ArrowsUpDownIcon className='w-5 h-5 fill-neutral-500' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full grid lg:grid-cols-3 gap-12 pb-3 my-9 overflow-hidden'>
        <div className='col-span-3 grid lg:grid-cols-2 w-full bg-white rounded-lg shadown-lg'>
          <div className='w-full rounded-lg'>
            <div
              className='w-full aspect-[16/9] rounded-lg justify-center items-center flex bg-cover bg-center relative'
              style={{
                backgroundImage: `url("https://packschool.s3.amazonaws.com/unilever-brands-1.png")`,
              }}
            >
              <motion.div className='absolute left-4 top-4 w-fit z-[2] bg-neutral-600/40 backdrop-blur-md rounded-lg px-2 py-1.5 shadow'>
                <motion.div className='flex items-center gap-2'>
                  <motion.div>
                    <StarIcon className='w-5 h-5 fill-white' />
                  </motion.div>
                  <motion.div className='text-white font-bold'>
                    Featured Course
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div className='w-20 h-20 bg-white/40 backdrop-blur-lg hover:bg-clemson transition-colors ease-in rounded-full shadow-xl flex justify-center items-center cursor-pointer'>
                <PlayCircleIcon className='w-20 h-20' />
              </motion.div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <motion.div className='flex flex-col gap-3 py-9'>
              <motion.div className='font-semibold text-2xl lg:text-3xl max-w-sm tracking-tight leading-none'>
                Unilever Packaging Bootcamp 1010
              </motion.div>
              <motion.div className='leading-snug text-lg line-clamp-4 text-neutral-600 max-w-md'>
                This Boot Camp will serve as an introduction to the packaging
                industry and provide the fundamental knowledge necessary to get
                you up to speed.
              </motion.div>
              <motion.div className='bg-black text-white font-bold w-fit rounded-lg px-6 py-2 mt-2'>
                Select Course
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-16'>
        {supportLinks.map((link) => (
          <div key={link.name}>
            <CourseCardVideoHeader link={link} />
          </div>
        ))}
      </div> */}
    </motion.section>
  );
};

export default UnileverCourses;
