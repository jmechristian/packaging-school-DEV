import React from 'react';
import VideoHeading from '../../../../../../components/lms/video/VideoHeading';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';
import NextLesson from '../../../../../../components/lms/shared/NextLesson';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative pb-24'>
      <div className='mx-auto max-w-7xl w-full h-full relative aspect-[16/9] py-4 bg-dark-dark flex justify-center items-center'>
        <iframe
          src='https://docs.google.com/presentation/d/e/2PACX-1vSVK5oQ9Br8RV0ZMdGJW62-cssybcn7yGlJJxpN4d56fBmRBh5E_z4eouQfCzD1RuZxR2WrnZdbCa_G/embed?start=false&loop=false&delayms=3000'
          frameborder='0'
          width='100%'
          height='100%'
          allowFullScreen='true'
          mozallowfullscreen='true'
          webkitallowfullscreen='true'
        ></iframe>
      </div>
      <VideoHeading id={'CPS-12.04'} title={'Typography'} />
      <CourseMenuWrapper />
      <div className='py-24'>
        <NextLesson
          nextLesson={'Brand Development Lab'}
          nextLessonLink={'brand-development-lab'}
        />
      </div>
    </div>
  );
};

export default Page;
