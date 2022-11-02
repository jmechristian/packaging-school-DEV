import React from 'react';
import {
  ArrowRightCircleIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import CertificateCardBullets from './CertificateCardBullets';
import { useDispatch } from 'react-redux';
import { setPreviewOpen } from '../../features/all_courses/courseFilterSlice';

const CertificateCardDetails = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-slate-500/30 p-4 rounded-md backdrop-blur-lg shadow-xl flex flex-col gap-4 max-w-prose'>
      <div className='block lg:hidden xl:block'>
        <div className='text-sm text-slate-200'>
          An online education program that provides proactive learning in the
          space of packaging development, material procurement, and
          organizational management.
        </div>
      </div>
      <CertificateCardBullets />
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
