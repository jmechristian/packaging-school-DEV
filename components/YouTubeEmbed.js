import React from 'react';

const YouTubeEmbed = ({ embedid }) => {
  return (
    <div className='aspect-video w-full h-full'>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${embedid}`}
        title='YouTube video player'
        framebordebr='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
