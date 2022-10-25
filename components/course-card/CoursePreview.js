import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import YouTubeEmbed from '../YouTubeEmbed';

const CoursePreview = ({ close, video }) => {
  return (
    <>
      <div className='absolute z-[60] top-0 right-0'>
        <button onClick={() => close()}>
          <XCircleIcon className='w-8 h-8 fill-slate-300' />
        </button>
      </div>
      <div className='fixed z-50 left-0 right-0 inset-y-1/2 -translate-y-1/2 aspect-video'>
        <YouTubeEmbed embedid={video} />
      </div>
      <div className='fixed top-0 right-0 bottom-0 left-0 bg-slate-900/90 z-40 backdrop-blur-sm'></div>
    </>
  );
};

export default CoursePreview;
