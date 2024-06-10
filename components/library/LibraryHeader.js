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

const LibraryHeader = ({ displayName, email, logo, slides, video, pdf }) => {
  const [isMediaType, setIsMediaType] = useState('SLIDES');
  return (
    <div className='w-full h-full flex flex-col lg:flex-row lg:justify-between gap-12 lg:px-12 xl:px-0 lg:gap-16'>
      <div className='flex items-center'>
        <div className='w-full flex flex-col justify-center gap-5 lg:gap-4 lg:max-w-2xl'>
          <div className='w-full h-full flex max-w-[200px] md:max-w-[250px]'>
            <img
              src={logo}
              alt={`${displayName} Logo`}
              className='w-full h-auto'
            />
          </div>
          <div>
            <h1 className='h2-base'>Welcome, {displayName} Members</h1>
          </div>
          <div className='text-lg leading-snug max-w-xl w-full'>
            Explore the {displayName} Knowledge Library below. To learn how to
            make the most of your library, select your preferred instructional
            method to the right (advance through the slides or download them as
            a PDF). For additional assistance, feel free to contact us at{' '}
            <a href={`mailto:${email}`} rel='noreferrer' target='_blank'>
              {email}
            </a>
            .
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center border-2 border-black bg-white shadow-[6px_6px_0px_rgba(0,0,0,0.20)] h-full w-full max-w-[580px]'>
        <div className='w-full aspect-[16/9]'>
          <ReactGoogleSlides
            width={'100%'}
            height={'100%'}
            slidesLink='https://docs.google.com/presentation/d/1njv_Q25JTyNzsDVjP7GqIq_U3Udfg7DSpgoBP-gqLWg/edit?usp=sharing'
            position={1}
            showControls
            loop
          />
        </div>
        <div
          className='w-full flex items-center justify-center py-4 gap-1 cursor-pointer'
          onClick={() => {}}
        >
          <div>
            <DocumentArrowDownIcon className='w-5 h-5' />
          </div>
          <div className='text-sm font-medium'>Download as PDF</div>
        </div>
      </div>
    </div>
  );
};

export default LibraryHeader;
