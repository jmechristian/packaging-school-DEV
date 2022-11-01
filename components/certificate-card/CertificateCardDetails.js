import React from 'react';
import {
  CheckBadgeIcon,
  ArrowRightCircleIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import {
  setPreviewClosed,
  setPreviewOpen,
} from '../../features/all_courses/courseFilterSlice';

const CertificateCardDetails = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-slate-500/30 p-4 rounded-md backdrop-blur-lg shadow-xl flex flex-col gap-4 max-w-prose'>
      <div className='text-sm text-slate-200'>
        An online education program that provides proactive learning in the
        space of packaging development, material procurement, and organizational
        management.
      </div>
      <div className='flex flex-col gap-2 lg:flex-row lg:gap-6'>
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
      <div className='flex flex-col lg:flex-row gap-4 mt-1'>
        <button className='flex gap-1 bg-clemson rounded-md py-3 px-4 items-center justify-center'>
          <div className='text-white text-sm font-semibold'>
            View Certificate
          </div>
          <ArrowRightCircleIcon className='w-5 h-5 fill-white' />
        </button>
        <button
          className='flex gap-1 border border-clemson rounded-md py-3 px-4 items-center justify-center'
          onClick={() => dispatch(setPreviewOpen())}
        >
          <div className='text-clemson text-sm font-semibold'>
            Watch Preview
          </div>
          <VideoCameraIcon className='w-5 h-5 fill-clemson' />
        </button>
      </div>
    </div>
  );
};

export default CertificateCardDetails;
