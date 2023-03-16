import React from 'react';
import SimpleIntakeForm from '../layout/SimpleIntakeForm';
import VideoPlayer from '../VideoPlayer';

const PacknotesBottom = () => {
  return (
    <div className='relative overflow-hidden bg-white px-6 sm:py-16 mb-8 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-8 gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='flex flex-col gap-12 lg:pr-10 pr-0'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-base-brand font-greycliff'>
                Get In Touch
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-greycliff'>
                Better Together.
              </h1>
              <p className='mt-6 text-xl leading-8 text-slate-700'>
                Is there something on this page that intrigues you? Do you want
                to be contacted by one of our Packaging School educational
                specialists? Please fill out the form, and we&apos;ll reach out.
              </p>
            </div>
            <div className='w-full h-full aspect-[16/9]'>
              <VideoPlayer videoEmbedLink='https://player.vimeo.com/video/216191011?h=63ed80e2cf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' />
            </div>
          </div>
        </div>
        <div className='md:-mt-12 md:-ml-12 md:p-12 scroll-pt-24 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <div className='w-full max-w-none rounded-xl py-3 bg-clemson shadow-lg ring-1 ring-slate-400/10 sm:w-[57rem] flex justify-start items-center'>
            <SimpleIntakeForm submit={(data) => console.log(data)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacknotesBottom;
