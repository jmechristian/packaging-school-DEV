import React from 'react';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import VideoBody from '../../../../../../components/lms/video/VideoBody';

const Page = () => {
  const router = useRouter();

  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative'>
      <div className='dark:bg-dark-dark bg-neutral-100 max-w-6xl mx-auto w-full py-16'>
        <div className='flex flex-col gap-24 items-center'>
          <div className='flex flex-col gap-6'>
            <div className='text-base-brand font-bold text-4xl text-center'>
              You&apos;re turn.
            </div>
            <div className='max-w-2xl mx-auto text-2xl text-center'>
              Now that you are ready to create your very own unique style guide,
              take a look at how{' '}
              <span className='font-bold text-clemson'>Walmart</span> and{' '}
              <span className='font-bold text-clemson'>Cabela&apos;s</span>{' '}
              handle their corporate identity and brand standards.
            </div>
          </div>
          <div className='relative'>
            <div className='absolute -inset-3 rounded-lg bg-gradient-to-r from-clemson dark:from-base-brand dark:via-base-light via-orange-500 to-clemson-dark dark:to-base-mid opacity-75 blur'></div>
            <div class='relative flex h-72 w-80 p-6 items-center justify-center rounded-lg bg-white dark:bg-slate-900 text-slate-300'>
              <Image
                src={
                  'https://packschool.s3.amazonaws.com/Brand_Guide_Covers.png'
                }
                width={552}
                height={285}
                alt='Brand Guide Covers'
              />
            </div>
          </div>
          <div className='flex flex-col gap-6  max-w-2xl mx-auto w-full'>
            <div
              className='w-full flex justify-between items-center shadow-lg bg-white dark:bg-neutral-700 rounded-lg px-6 py-6'
              onClick={() =>
                router.push(
                  'https://import.cdn.thinkific.com/2896/CabelasStyleGuide-1507035919260.pdf'
                )
              }
            >
              <div className='flex flex-col'>
                <div className='font-bold text-lg'>
                  Cabela&apos;s Style Guide
                </div>
                <div className='text-sm text-neutral-400'>4.44 MB</div>
              </div>
              <div className='w-40 text-center text-sm font-bold bg-base-brand hover:bg-base-mid px-2 py-2 cursor-pointer rounded-lg shadow-lg'>
                DOWNLOAD
              </div>
            </div>
            <div className='w-full flex justify-between items-center shadow-lg bg-white dark:bg-neutral-700 rounded-lg px-6 py-6'>
              <div className='flex flex-col'>
                <div className='font-bold text-lg'>
                  Walmart&apos;s Style Guide
                </div>
                <div className='text-sm text-neutral-400'>4.57 MB</div>
              </div>
              <div
                className='w-40 text-center text-sm font-bold bg-base-brand hover:bg-base-mid px-2 py-2 cursor-pointer rounded-lg shadow-lg'
                onClick={() =>
                  router.push(
                    'https://import.cdn.thinkific.com/2896/WalmartStyleGuide-1507035919258.pdf'
                  )
                }
              >
                DOWNLOAD
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoBody
        title='Conclusion & Bonus Content'
        id={'CPS-12.07'}
        nextLesson={'Return Home'}
        nextLessonLink={''}
      />
      <CourseMenuWrapper />
    </div>
  );
};

export default Page;
