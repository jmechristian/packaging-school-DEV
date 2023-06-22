import React from 'react';
import Link from 'next/link';
import {
  AcademicCapIcon,
  BeakerIcon,
  CakeIcon,
  CogIcon,
} from '@heroicons/react/24/solid';
import CertIcon from '../icons/CertIcon';
import { Popover } from '@headlessui/react';

const CertMenuItem = ({
  title,
  content,
  bgColor,
  icon,
  learnMore,
  apply,
  toggleOpen,
}) => {
  const setIcon = () => {
    switch (icon) {
      case 'academicCap':
        return <AcademicCapIcon className='w-6 h-6' />;
      case 'beaker':
        return <BeakerIcon className='w-6 h-6' />;
      case 'cog':
        return <CogIcon className='w-6 h-6' />;
      case 'food':
        return <CakeIcon className='w-6 h-6' />;
      default:
        return (
          <CertIcon className='w-6 h-6 stroke-2 stroke-white fill-transparent' />
        );
    }
  };

  return (
    <div className='cols-span-1 flex flex-col bg-base-light rounded-lg p-5 gap-4 h-full justify-between'>
      <div className='flex flex-col gap-2 col-span-4 items-center justify-center'>
        <div className='flex flex-col gap-3 h-full'>
          <div className='flex gap-3 items-center w-full'>
            <div>
              <div
                className={`w-12 h-12 ${bgColor} text-white rounded-full flex justify-center items-center`}
              >
                {setIcon()}
              </div>
            </div>
            <div className='font-semibold font-greycliff text-slate-700 text-lg leading-tight'>
              {title}
            </div>
          </div>

          <div className='text-sm line-clamp-3 text-slate-600'>{content}</div>
        </div>
      </div>
      <div className='flex items-center gap-1 h-full'>
        <div
          className='rounded-lg px-3 py-1.5 font-greycliff text-sm w-fit  text-clemson font-bold'
          onClick={() => toggleOpen()}
        >
          <Link href={apply}>Apply Now</Link>
        </div>
        <div
          className='rounded-lg px-3 py-1.5 font-greycliff text-sm  text-slate-500 font-semibold'
          onClick={() => toggleOpen()}
        >
          <Link href={learnMore}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default CertMenuItem;
