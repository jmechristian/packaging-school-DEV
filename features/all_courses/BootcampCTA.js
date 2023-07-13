import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const BootcampCTA = () => {
  const router = useRouter();
  return (
    <div
      className='bg-bootcamp-mobile bg-left bg-cover py-5 px-5 rounded-md flex text-center'
      onClick={() => router.push('/courses/packaging-boot-camp-101')}
    >
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <div className='text-white font-bold text-xl'>
            New to Packaging? Start Here
          </div>
          <div className='text-base-light text-sm'>
            Jumpstart your knowledge with a solid foundation in packaging
            basics.
          </div>
        </div>
        <button className='bg-clemson rounded-md py-2 px-4'>
          <div className='text-white font-semibold uppercase text-sm'>
            Packaging Bootcamp 101
          </div>
        </button>
      </div>
    </div>
  );
};

export default BootcampCTA;
