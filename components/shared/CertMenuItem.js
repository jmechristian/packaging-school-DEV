import React from 'react';
import Link from 'next/link';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/solid';

const CertMenuItem = ({ title, content, bgColor, icon, learnMore, apply }) => {
  return (
    <div className='cols-span-1 flex flex-col bg-base-light rounded-lg p-5 gap-4 h-full justify-between'>
      <div className='flex flex-col gap-2 col-span-4 items-center justify-center'>
        <div className='flex flex-col gap-3 h-full'>
          <div className='flex gap-3 items-center w-full'>
            <div>
              <div
                className={`w-12 h-12 ${bgColor} text-white rounded-full flex justify-center items-center`}
              >
                <AcademicCapIcon className='w-6 h-6' />
              </div>
            </div>
            <div className='font-semibold font-greycliff text-slate-700 text-lg leading-tight'>
              {title}
            </div>
          </div>

          <div className='text-sm line-clamp-3'>{content}</div>
        </div>
      </div>
      <div className='flex items-center gap-1 h-full'>
        <div className='rounded-lg px-3 py-1.5 font-greycliff text-sm w-fit  text-clemson-dark font-semibold'>
          <Link href={apply}>Apply Now</Link>
        </div>
        <div className='rounded-lg px-3 py-1.5 font-greycliff text-sm  text-slate-500 font-semibold'>
          <Link href={learnMore}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default CertMenuItem;
