import React from 'react';
import { PrismicRichText } from '@prismicio/react';

import CourseIntro from './CourseIntro';
import CourseItems from './CourseItems';
import CourseInfo from './CourseInfo';
import CourseObjectives from './CourseObjectives';

const CourseMain = ({ data }) => {
  console.log(data);
  return (
    <section className='w-full bg-dark'>
      <div className='container__inner hero__padding'>
        <div className='grid grid-cols-1 lg:grid-cols-3 '>
          <div className='flex flex-col gap-16 lg:col-span-2 lg:pr-16'>
            <CourseIntro
              title={data.course_title}
              instructor={data.instructor}
              subtitle={data.course_subtitle}
              preview={data.course_preview}
              infoSheet={data.course_info_sheet}
            />
            <div className='lg:hidden'>
              <CourseInfo
                price={data.course_price}
                hours={data.course_hours}
                lessons={data.course_lessons}
                videos={data.course_videos}
                certification={data.certificate_link}
              />
            </div>
            <CourseObjectives
              what={data.what_learned}
              items={data.what_learned_items}
            />
          </div>
          <div className='hidden lg:inline-grid lg:col-span-1'>
            <CourseInfo
              price={data.course_price}
              hours={data.course_hours}
              lessons={data.course_lessons}
              videos={data.course_videos}
              certification={data.certificate_link}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMain;
