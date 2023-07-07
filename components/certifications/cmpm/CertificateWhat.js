import React from 'react';
import VideoPlayer from '../../VideoPlayer';
import FadeIn from '../../../helpers/FadeIn';

const CertificateWhat = () => {
  return (
    <section className='py-16 lg:py-32'>
      <div className='flex flex-col gap-9 container-7xl'>
        <div className='flex flex-col gap-9 max-w-4xl mx-auto'>
          <h2 className='text-4xl lg:text-5xl max-w-2xl dark:text-white'>
            <FadeIn>
              The Industry&apos;s Most Valuable Certificate Program
            </FadeIn>
          </h2>
          <div>
            <FadeIn>
              <p className='dark:text-gray-500 text-slate-700 font-greycliff text-xl'>
                With a duration of 12 weeks and 14 comprehensive courses, this
                <span className='dark:text-white text-slate-900 font-bold'>
                  {' '}
                  online program
                </span>{' '}
                offers flexibility for individuals with full-time jobs, while
                ensuring continuous support through Dr. Suggs&apos; readily
                available office hours.
              </p>
            </FadeIn>
          </div>
        </div>
        <FadeIn>
          <div className='w-full h-full aspect-[16/9] mt-8'>
            <VideoPlayer videoEmbedLink={'https://youtu.be/N_hYWvQO0Sg'} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CertificateWhat;
