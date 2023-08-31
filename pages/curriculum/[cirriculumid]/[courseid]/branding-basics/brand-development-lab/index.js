import React from 'react';
import VideoHeading from '../../../../../../components/lms/video/VideoHeading';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';
import NextLesson from '../../../../../../components/lms/shared/NextLesson';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative pb-24'>
      <div className='mx-auto max-w-7xl w-full h-full relative aspect-[16/9] py-4 bg-dark-dark flex justify-center items-center'>
        <iframe
          src='https://docs.google.com/presentation/d/e/2PACX-1vRp1cfsW9WL17_OrhzDt5m63vWOA0o-8gyZKGVmzJtFx-6WbGbPs4rnYGvWRMVhek7lQNFJXdwasG3R/embed?start=false&loop=false&delayms=3000&slide=id.g17b9f5756e_0_0'
          frameborder='0'
          width='100%'
          height='100%'
          allowFullScreen='true'
          mozAllowFullScreen='true'
          webkitAllowFullscreen='true'
        ></iframe>
      </div>
      <VideoHeading
        id={'CPS-12.05'}
        title={'Brand Development Lab'}
        nextLesson={'Style Guide Lab'}
        nextLessonLink={'style-guide-lab'}
      />
      <CourseMenuWrapper />
    </div>
  );
};

export default Page;
