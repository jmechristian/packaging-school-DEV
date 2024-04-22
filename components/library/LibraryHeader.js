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

const LibraryHeader = ({ displayName, email, logo, slides, video, pdf }) => {
  const [isMediaType, setIsMediaType] = useState('SLIDES');
  return (
    <div className='w-full h-full flex flex-col lg:flex-row lg:justify-between gap-12 lg:px-12 xl:px-0 lg:gap-16'>
      <div className='flex items-center'>
        <div className='w-full flex flex-col justify-center gap-5 lg:gap-4 lg:max-w-2xl'>
          <div className='w-full h-full flex lg:-mt-4 max-w-[200px] md:max-w-[250px]'>
            <img
              src={logo}
              alt={`${displayName} Logo`}
              className='w-full h-auto'
            />
          </div>
          <div>
            <h1 className='font-bold text-5xl leading-tight'>
              Welcome, {displayName} Members
            </h1>
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
      <div className='flex flex-col justify-center items-center border-2 border-black bg-white shadow-[4px_4px_0px_black] h-full w-full max-w-[550px] rounded-lg'>
        <div className='w-full aspect-[16/9]'>
          <ReactGoogleSlides
            width={'100%'}
            height={'100%'}
            slidesLink='https://docs.google.com/presentation/d/15DjazbEB9njTkkU6z2EdTKCKsN5FtvWW4s10urJhT_M/edit?usp=sharing'
            position={1}
            showControls
            loop
          />
        </div>
        <div
          className='w-full flex items-center justify-center py-4 gap-1 cursor-pointer'
          onClick={() =>
            window.open(
              'https://packschool.s3.amazonaws.com/greenblue-instructions-v2.pdf',
              '_blank'
            )
          }
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
