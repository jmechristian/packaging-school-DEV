import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const AllCourseHeaderMobile = () => {
  const router = useRouter();
  return (
    <div
      className='flex justify-center item-center w-full bg-bootcamp-mobile bg-cover bg-center lg:hidden'
      onClick={() => router.push('/courses/packaging-boot-camp-101')}
    >
      <div className='flex flex-col gap-4 justify-center items-center text-center py-8 px-8'>
        <div className='text-white font-greycliff font-bold text-2xl'>
          New to Packaging?
          <br /> Start Here!
        </div>
        <div className='text-white'>
          Jumpstart your knowledge with a solid foundation in packaging basics.
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

export default AllCourseHeaderMobile;
