import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

const SalesBar = () => {
  return (
    <div className='bg-base-light flex flex-col gap-3 px-4 py-6 rounded'>
      <InformationCircleIcon className='fill-base-dark w-14 h-14 hidden' />
      <div className='body__text'>
        Are you a business owner? If you are looking to put one or more
        employees through this program, please contact us at{' '}
        <span className='font-bold'>864-412-5000</span> or
        <span className='font-bold'> info@packagingschool.com</span>.
      </div>
    </div>
  );
};

export default SalesBar;
