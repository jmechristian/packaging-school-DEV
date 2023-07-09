import React from 'react';
import VideoPlayer from '../../VideoPlayer';
import FadeIn from '../../../helpers/FadeIn';

const CPSAbout = () => {
  return (
    <section className='py-16 lg:py-32'>
      <div className='flex flex-col gap-9 container-7xl'>
        <div className='flex flex-col gap-9 max-w-4xl mx-auto'>
          <h2 className='text-4xl lg:text-5xl max-w-2xl dark:text-white '>
            <FadeIn>Raise Your Packaging IQ</FadeIn>
          </h2>
          <div>
            <FadeIn>
              <p className='dark:text-gray-500 text-slate-700 font-greycliff text-xl'>
                Empower your employees (or yourself) with the essential tools
                for success in the packaging profession, providing 24/7 access
                to review relevant content on-demand. Set your employees up for
                success, supporting their career advancement, and utilize this
                program for effective onboarding and retention strategies.
              </p>
            </FadeIn>
          </div>
        </div>
        <FadeIn>
          <div className='w-full h-full aspect-[16/9] mt-8'>
            <VideoPlayer
              videoEmbedLink={'https://www.youtube.com/watch?v=wjRIwFK8YTo'}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CPSAbout;
