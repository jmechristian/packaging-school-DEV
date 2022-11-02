import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const CertificateCardBullets = () => {
  return (
    <div className='flex flex-col gap-2 lg:flex-row lg:gap-5'>
      <div className='flex gap-1 items-center'>
        <div>
          <CheckBadgeIcon className='w-5 h-5 fill-base-brand' />
        </div>
        <div className='text-sm text-slate-200'>PhD-Led</div>
      </div>
      <div className='flex gap-1 items-center'>
        <div>
          <CheckBadgeIcon className='w-5 h-5 fill-base-brand' />
        </div>
        <div className='text-sm text-slate-200'>12 Week Ciriculum</div>
      </div>
      <div className='flex gap-1 items-center'>
        <div>
          <CheckBadgeIcon className='w-5 h-5 fill-base-brand' />
        </div>
        <div className='text-sm text-slate-200'>14 Courses</div>
      </div>
      <div className='flex gap-1 items-center'>
        <div>
          <CheckBadgeIcon className='w-5 h-5 fill-base-brand' />
        </div>
        <div className='text-sm text-slate-200'>8 CEUs</div>
      </div>
    </div>
  );
};

export default CertificateCardBullets;
