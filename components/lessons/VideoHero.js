import React from 'react';
import VideoPlayer from '../VideoPlayer';

const VideoHero = ({ videoUrl, videoLink }) => {
  return (
    <div>
      <div className='max-w-7xl mx-auto object-cover border border-neutral-500'>
        {/* <video
          className='w-full h-full'
          controls
          controlsList='nodownload'
          autoPlay
          playsInline
        >
          <source src={videoUrl} type='video/mp4'></source>
        </video> */}
        <VideoPlayer
          light={false}
          videoEmbedLink={videoUrl}
          videoLink={videoLink}
        />
      </div>
    </div>
  );
};

export default VideoHero;
