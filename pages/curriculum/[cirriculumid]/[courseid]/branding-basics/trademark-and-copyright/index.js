import React from 'react';
import VideoHeading from '../../../../../../components/lms/video/VideoHeading';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative pb-24'>
      <div className='mx-auto max-w-7xl w-full h-full relative aspect-[16/9] py-4 bg-dark-dark flex justify-center items-center'>
        <iframe
          src='https://packschool.s3.amazonaws.com/trademarkandcopyright-210610-090459.pdf'
          className='w-full h-full'
          frameborder='0'
        ></iframe>
      </div>
      <VideoHeading
        id={'CPS-12.02'}
        title={'Trademark and Copyright'}
        nextLesson={'Color Theory and Symbolism'}
        nextLessonLink={'color-theory-and-symbolism'}
      />
      <CourseMenuWrapper />
    </div>
  );
};

export default Page;
