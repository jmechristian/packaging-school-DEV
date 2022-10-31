import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const AllCourseHeaderDesktop = () => {
  return (
    <div className='hidden lg:flex justify-between item-center w-full bg-bootcamp-mobile bg-cover bg-center'>
      <div className='container__inner w-full flex justify-center gap-24'>
        <div className='flex flex-col gap-2 py-8'>
          <div className='text-white font-plex font-bold text-3xl'>
            New to Packaging? Start Here!
          </div>
          <div className='text-white'>
            Jumpstart your knowledge with a solid foundation in packaging
            basics.
          </div>
        </div>
        <button>
          <div className='flex items-center gap-1 py-3 px-5 rounded-md shadow-lg bg-white'>
            <div className='text-slate-900 font-semibold uppercase text-sm'>
              Bootcamp 101
            </div>
            <ArrowLongRightIcon className='w-6 h-6 stroke-slate-900' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllCourseHeaderDesktop;
