import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIndiaBanner } from '../../features/layout/layoutSlice';
import { registerClick } from '../../helpers/api';

const IndiaBanner = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { indiaBanner } = useSelector((state) => state.layout);
  const { location } = useSelector((state) => state.auth);

  const bannerClickHandler = async () => {
    await registerClick(
      'IndiaBanner',
      '/india',
      window.location.pathname,
      window.location.search ? window.location.search : 'undefined',
      'BANNER',
      location.ip,
      location.country
    );
    router.push(
      '/india?utm_source=website&utm_medium=banner&utm_campaign=india-students'
    );
  };

  return (
    indiaBanner && (
      <div className='fixed z-50 bottom-7 max-w-5xl mx-auto w-full h-28 rounded-2xl bg-white border-4 border-black right-1/2 translate-x-1/2 flex items-center justify-between px-6 shadow-[0px_4px_0px_black] cursor-pointer'>
        <div
          className='w-6 h-6 rounded-full border-2 border-black absolute top-2 right-2 flex justify-center items-center text-sm'
          onClick={() => dispatch(toggleIndiaBanner())}
        >
          X
        </div>
        <div className='flex items-center gap-5' onClick={bannerClickHandler}>
          <div className='bg-brand-red border-black border-2 text-white font-bold px-4 py-2 rounded-lg w-fit shadow-[4px_4px_0px_black] lg:text-lg'>
            Limited Time!
          </div>
          <div className='text-2xl font-semibold tracking-tight'>
            Unbox Your Potential: Dive into Expert-Crafted Courses at{' '}
            <span className='text-base-brand font-bold'>
              85% OFF!<sup className='-mt-3'>*</sup>
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default IndiaBanner;
