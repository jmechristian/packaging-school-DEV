import React from 'react';
import VideoMain from '../../../../components/lms/video/VideoMain';
import CourseMenuWrapper from '../../../../components/lms/shared/courseMenu/CourseMenuWrapper';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid relative'>
      <CourseMenuWrapper />
      <VideoMain />
    </div>
  );
};

export default Page;
