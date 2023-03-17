import React from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoPlayer = ({ videoEmbedLink }) => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <ReactPlayer
        url={videoEmbedLink}
        width={'100%'}
        height={'100%'}
        controls
      />
    </div>
  );
};

export default VideoPlayer;
