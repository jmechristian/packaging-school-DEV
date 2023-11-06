import React from 'react';
import VideoPlayer from '../VideoPlayer';

const CourseCardVideoHeader = ({ link }) => {
  return (
    <div className='flex flex-col rounded-2xl h-full bg-neutral-100 shadow-lg'>
      <div className='relative flex-1'>
        <div className='w-full aspect-[16/9] bg-black rounded-t-xl'>
          <VideoPlayer
            videoEmbedLink={link.video}
            light={link.light === false ? false : true}
            rounded={true}
          />
        </div>
        {/* <div
          className={`hidden absolute top-0 left-6 lg:inline-block -translate-y-1/2 transform rounded-full ${
            link.background ? link.background : 'bg-indigo-600'
          } p-5 shadow-lg`}
        >
          <link.icon className='h-7 w-7 text-white' aria-hidden='true' />
        </div> */}
        <div className='p-4 md:p-6'>
          <h3 className='text-lg md:text-xl font-medium text-gray-900'>
            {link.name}
          </h3>
          <p className=' mt-3 md:mt-4 text-sm text-gray-500 leading-tight'>
            {link.description}
          </p>
        </div>
      </div>
      <div className='rounded-bl-2xl rounded-br-2xl bg-unilever-darkblue p-4 md:p-6 md:px-8 flex justify-center'>
        <a
          href={link.href}
          className='text-sm md:text-base font-bold text-white hover:text-indigo-200'
        >
          Select Course<span aria-hidden='true'> &rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default CourseCardVideoHeader;
