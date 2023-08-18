import React from 'react';
import { ArrowDownTrayIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const LessonActivityModal = ({
  title,
  hasSubmitted,
  actionLink,
  actionExample,
  lessonTitle,
}) => {
  // const sendActionDownloadEvent = () => {
  //   gtag('event', 'resource_click', {
  //     resource: 'action_download',
  //     lesson: lessonTitle,
  //   });
  // };

  // const sendExampleDownloadEvent = () => {
  //   gtag('event', 'resource_click', {
  //     resource: 'example_download',
  //     lesson: lessonTitle,
  //   });
  // };

  return (
    <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-12 md:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16'>
      {!hasSubmitted ? (
        <div>
          <div className='flex justify-center items-center mb-8 text-center'>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
              alt=''
            />
          </div>
          <h2 className='mx-auto max-w-3xl text-3xl md:text-4xl font-bold tracking-tight text-white'>
            Join the <span className='text-blue-500'>Thought Leaders</span> of
            Packaging Design.
          </h2>
          <p className='mx-auto mt-6 max-w-xl leading-7 text-gray-300 text-base md:text-lg'>
            Collaborate with a community dedicated to bringing companies,
            subject matter experts, and associations together to create a shared
            learning management system across all facets of packaging and
            processing.
          </p>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center mb-8 text-center gap-16'>
          <h2 className='mx-auto max-w-3xl text-3xl md:text-3xl font-bold tracking-tight text-white'>
            <span className='text-blue-500'>{title}</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div
              className={`${
                actionExample ? 'col-span-1' : 'col-span-2'
              } flex gap-2 text-slate-800 bg-white py-3 px-6 rounded-md`}
            >
              <div>
                <ArrowDownTrayIcon className='w-5 h-5 fill-slate-800' />
              </div>
              <div>
                <a href={actionLink} className='font-medium' target='_blank'>
                  Get Resource
                </a>
              </div>
            </div>
            {actionExample && (
              <div className='col-span-1 flex gap-2 text-white/80 border border-white/80 py-3 px-6 rounded-md cursor-pointer'>
                <div>
                  <LightBulbIcon className='w-5 h-5 fill-white/80' />
                </div>
                <div onClick={sendExampleDownloadEvent}>
                  <a
                    href={actionExample}
                    className='font-medium'
                    target='_blank'
                    rel='noreferrer'
                  >
                    View Example
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <svg
        viewBox='0 0 1024 1024'
        className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
        aria-hidden='true'
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
            <stop stopColor='#7775D6' />
            <stop offset={1} stopColor='#E935C1' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LessonActivityModal;
