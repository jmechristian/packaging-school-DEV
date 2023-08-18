import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import YouTubeEmbed from '../YouTubeEmbed';
import { useSelector } from 'react-redux';
import VideoPlayer from '../VideoPlayer';

const CoursePreview = ({ close }) => {
  const { embedId } = useSelector((state) => state.course_filter);
  return (
    <>
      <div className='fixed z-[60] left-0 right-0 top-0 bottom-0 flex justify-center items-center'>
        <div className='fixed inset-9 bg-neutral-400/50 dark:bg-neutral-900/50 z-[55] backdrop-blur-sm'>
          <div className='fixed z-[50] top-4 right-5'>
            <button onClick={() => close()}>
              <XCircleIcon className='w-12 h-12 fill-neutral-700 dark:fill-slate-300' />
            </button>
          </div>
        </div>
        <div className='aspect-[16/9] w-full lg:w-3/4 relative z-[70]'>
          <VideoPlayer videoEmbedLink={embedId} />
        </div>
      </div>
    </>
  );
};

export default CoursePreview;
