import React from 'react';
import VideoHeading from '../../../../../../components/lms/video/VideoHeading';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';
import NextLesson from '../../../../../../components/lms/shared/NextLesson';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative pb-24'>
      <div className='mx-auto max-w-7xl w-full h-full relative aspect-[16/9] py-4 bg-dark-dark flex justify-center items-center'>
        <iframe
          src='https://docs.google.com/presentation/d/e/2PACX-1vRlr_VdiXY--W0CuFv9F4WDGYFPABkMC8yo8102Rg4LwK_D8tdfcpAqFVU2PI_Bi18AHXUZWc9-IANr/embed?start=false&loop=false&delayms=3000'
          frameborder='0'
          width='100%'
          height='100%'
          allowFullScreen='true'
          mozallowfullscreen='true'
          webkitallowfullscreen='true'
        ></iframe>
      </div>
      <VideoHeading id={'CPS-12.06'} title={'Style Guide Lab'} />
      <CourseMenuWrapper />
      <div className='py-24'>
        <NextLesson
          nextLesson={'Conclusion and Bonus Content'}
          nextLessonLink={'conclusion-and-bonus-content'}
        />
      </div>
    </div>
  );
};

export default Page;
