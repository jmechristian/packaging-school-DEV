import React from 'react';
import {
  CheckCircleIcon,
  PlayIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid';
import Timestamp from '../Timestamp';
import { useRouter } from 'next/router';

const CourseItem = ({ title, link, type, time, unlocked }) => {
  const router = useRouter();
  return (
    <div
      className='w-full py-5 pl-6 pr-4 rounded-r-lg hover:bg-base-light dark:hover:bg-zinc-800 transition ease-in cursor-pointer'
      onClick={() =>
        router.push(`/curriculum/cps/cps-12/branding-basics/${link}`)
      }
    >
      <div className='flex justify-between items-center gap-6'>
        <div className='flex items-center gap-4'>
          {/* <div>
            <CheckCircleIcon
              className={`${
                unlocked ? 'fill-green-500' : 'fill-neutral-500'
              } w-7 h-7`}
            />
          </div> */}
          <div className='flex flex-col'>
            <div className='dark:text-white/70 font-semibold'>{title}</div>
            <div className='text-xs text-neutral-600 dark:text-neutral-500 uppercase'>
              {time}
            </div>
          </div>
        </div>
        <div>{type}</div>
      </div>
    </div>
  );
};

export default CourseItem;
