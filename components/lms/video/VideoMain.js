import React from 'react';
import dynamic from 'next/dynamic';
import PlayerBar from './PlayerBar';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import VideoBody from './VideoBody';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
import { BrandingBasics } from '../../../data/Content';

const VideoMain = ({ url, title, id, content, nextLesson, nextLessonLink }) => {
  return (
    <div className='w-full h-full relative dark:bg-dark-mid'>
      <div className='mx-auto max-w-7xl relative aspect-[16/9] py-4 bg-dark-dark flex justify-center items-center'>
        {/* <PlayerBar />
        <div className='shadow-2xl rounded-full w-44 h-44 relative bottom-12'>
          <PlayCircleIcon className='fill-white/80 w-full h-full' />
        </div> */}
        <ReactPlayer url={url} width={'100%'} height={'100%'} controls />
      </div>
      <VideoBody
        title={title}
        id={id}
        content={content}
        nextLesson={nextLesson}
        nextLessonLink={nextLessonLink}
      />
    </div>
  );
};

export default VideoMain;
