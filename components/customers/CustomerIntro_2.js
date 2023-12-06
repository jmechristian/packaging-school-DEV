import React, { useState } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import {
  ChevronRightIcon,
  FilmIcon,
  PlayCircleIcon,
  Square3Stack3DIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/solid';
import dynamic from 'next/dynamic';

const ReactGoogleSlides = dynamic(() => import('react-google-slides'), {
  ssr: false,
});

import VideoPlayer from '../VideoPlayer';

const CustomerIntro_2 = () => {
  return (
    <div className='w-full h-full flex flex-col md:grid md:grid-cols-5 gap-12 pt-12 pb-20'>
      <div className='md:col-span-3 flex  items-center'>
        <div className='w-full flex flex-col justify-center gap-9 md:max-w-2xl'>
          <div className='w-full h-full flex mb-4'>
            <img
              src='https://packschool.s3.amazonaws.com/GB_logo.png'
              alt='greenBlue logo'
              className='w-1/2 h-auto'
            />
          </div>
          <div className='font-bold text-6xl'>
            <h1>Welcome, GreenBlue</h1>
          </div>
          <div className='text-lg'>
            Explore your library resources below. To learn how to make the most
            of your library, select your preferred instructional method. For
            additional assistance, feel free to contact us at Email@email.com.
          </div>
        </div>
      </div>
      <div className='md:col-span-2 flex flex-col justify-center items-center border rounded-xl'>
        <div className='w-full h-auto aspect-[16/9] bg-neutral-700'>
          <ReactGoogleSlides
            width={'100%'}
            height={'100%'}
            slidesLink='https://docs.google.com/presentation/d/1frh5qJEeQQ-kMIKpSi3MHaamjPUlSHKCudoPHX8vDXs'
            position={1}
            showControls
            loop
          />
        </div>
        <div className='w-fit grid grid-cols-3 gap-x-7 overflow-hidden py-2'>
          <div
            className='w-[56px] h-[56px] rounded-full bg-gb-green hover:bg-gb-gray shadow-md flex items-center justify-center'
            onClick={() => setIsMediaType('VIDEO')}
          >
            <div className='flex flex-col items-center justify-center'>
              <div>
                <FilmIcon className='w-5 h-5 fill-white' />
              </div>
              <div className='text-xs font-medium text-white'>Video</div>
            </div>
          </div>
          <div
            className='w-[56px] h-[56px] rounded-full bg-gb-green hover:bg-gb-gray cursor-pointer shadow-md flex items-center justify-center'
            onClick={() => setIsMediaType('SLIDES')}
          >
            <div className='flex flex-col items-center justify-center'>
              <div>
                <Square3Stack3DIcon className='w-5 h-5 fill-white' />
              </div>
              <div className='text-xs font-medium text-white'>Slides</div>
            </div>
          </div>
          <div
            className='w-[56px] h-[56px] rounded-full bg-gb-green hover:bg-gb-gray cursor-pointer shadow-md flex items-center justify-center'
            onClick={() => setIsMediaType('PDF')}
          >
            <div className='flex flex-col items-center justify-center'>
              <div>
                <DocumentArrowDownIcon className='w-5 h-5 fill-white' />
              </div>
              <div className='text-xs font-medium text-white'>PDF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerIntro_2;
