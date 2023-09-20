import React from 'react';
import VideoPlayer from '../VideoPlayer';

const CourseCardVideoHeader = ({ link }) => {
  return (
    <div className='flex flex-col rounded-2xl h-full bg-white shadow-xl'>
      <div className='relative flex-1'>
        <div className='w-full aspect-[16/9] bg-black rounded-t-xl'>
          <VideoPlayer
            videoEmbedLink={link.video}
            light={link.light === false ? false : true}
            rounded={true}
          />
        </div>
        <div
          className={`absolute top-0 left-6 inline-block -translate-y-1/2 transform rounded-full ${
            link.background ? link.background : 'bg-indigo-600'
          } p-5 shadow-lg`}
        >
          <link.icon className='h-7 w-7 text-white' aria-hidden='true' />
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-medium text-gray-900'>{link.name}</h3>
          <p className='mt-4 text-sm text-gray-500'>{link.description}</p>
        </div>
      </div>
      <div className='rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8'>
        <a
          href={link.href}
          className='text-base font-medium text-neutral-700 hover:text-indigo-600'
        >
          Purchase Course<span aria-hidden='true'> &rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default CourseCardVideoHeader;
