import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import RotatingCaret from '../RotatingCaret';
import CourseObjectiveTeaser from './CourseObjectiveTeaser';
import CourseObjectivesFull from './CourseObjectivesFull';

const CourseObjectives = ({ what, items }) => {
  const [showObjectives, setShowObjectives] = useState(false);

  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <div className='flex flex-col gap-12 lg:max-w-prose pb-16'>
      <div className='flex flex-col gap-4'>
        <div className='font-semibold font-plex text-2xl black__white '>
          What You Will Learn
        </div>
        <div className='gray__white text-lg'>
          <PrismicRichText field={what} />
        </div>
      </div>
      {items.length > 1 && (
        <div className='flex flex-col gap-6'>
          <div className='font-semibold font-plex text-2xl black__white pb-3 flex justify-between items-end'>
            <div>Course Objectives</div>
          </div>
          <motion.div
            animate={{
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <div className='flex flex-col gap-4 xl:grid xl:grid-cols-2 w-full relative'>
              <div className='flex flex-col gap-6'>
                {firstHalf &&
                  firstHalf.map((item, i) => (
                    <div className='flex gap-3 w-full' key={i}>
                      <div>
                        <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
                      </div>
                      <div className='gray__white text-lg'>
                        {item.overview_items}
                      </div>
                    </div>
                  ))}
              </div>
              <div className='flex flex-col gap-6'>
                {secondHalf &&
                  secondHalf.map((item, i) => (
                    <div className='flex gap-3 w-full' key={i}>
                      <div>
                        <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
                      </div>
                      <div className='gray__white text-lg'>
                        {item.overview_items}
                      </div>
                    </div>
                  ))}
              </div>
              <div className='absolute -left-5 -right-5 bottom-0 h-full bg-gradient-to-t from-dark via-dark/90'></div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CourseObjectives;
