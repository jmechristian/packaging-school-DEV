import React from 'react';
import VideoMain from '../../../../../../components/lms/video/VideoMain';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';
import { BrandingBasics } from '../../../../../../data/Content';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative pb-24'>
      <VideoMain
        url={
          'https://player.vimeo.com/video/241550959?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        }
        title={'Introduction to Branding Basics'}
        id={'CPS-12.01'}
        content={<BrandingBasics />}
        nextLesson={'Trademark and Copyright'}
        nextLessonLink={'trademark-and-copyright'}
      />
      <CourseMenuWrapper />
    </div>
  );
};

export default Page;
