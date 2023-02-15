import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoEmbedLink }) => {
  return (
    <div className='aspect-video w-full h-full overflow-hidden'>
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
