import React from 'react';
import VideoMain from '../../../../../../components/lms/video/VideoMain';
import CourseMenuWrapper from '../../../../../../components/lms/shared/courseMenu/CourseMenuWrapper';
import { ColorTheory } from '../../../../../../data/Content';

const Page = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-dark-mid dark:text-white relative pb-24'>
      <VideoMain
        url={
          'https://player.vimeo.com/video/199711432?h=c92a957de3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        }
        title={'Color: Theory and Symbolism'}
        id={'CPS-12.03'}
        content={<ColorTheory />}
        nextLesson={'Typography'}
        nextLessonLink={'typography'}
      />
      <CourseMenuWrapper />
    </div>
  );
};

export default Page;
