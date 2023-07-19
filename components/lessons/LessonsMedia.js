import React from 'react';

const LessonsMedia = ({ videoUrl }) => {
  return (
    <div>
      <div className='max-w-7xl mx-auto aspect-[16/9]'>
        {/* <video
          className='w-full h-full'
          controls
          controlsList='nodownload'
          autoPlay
          playsInline
        >
          <source src={videoUrl} type='video/mp4'></source>
        </video> */}
        <iframe
          width='100%'
          height='100%'
          src={videoUrl}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LessonsMedia;
