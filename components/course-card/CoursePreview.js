import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import YouTubeEmbed from '../YouTubeEmbed';
import { useSelector } from 'react-redux';

const CoursePreview = ({ close }) => {
  const { embedId } = useSelector((state) => state.course_filter);
  return (
    <>
      <div className='fixed z-[65] top-4 right-5 overflow-hidden'>
        <button onClick={() => close()}>
          <XCircleIcon className='w-8 h-8 fill-slate-300' />
        </button>
      </div>
      <div className='fixed z-[60] left-0 right-0 top-0 bottom-0 flex justify-center items-center'>
        <div className='aspect-video w-full lg:w-3/4'>
          <YouTubeEmbed embedid={embedId} />
        </div>
      </div>
      <div className='fixed top-0 right-0 bottom-0 left-0 bg-slate-900/90 z-[55] backdrop-blur-sm'></div>
    </>
  );
};

export default CoursePreview;
