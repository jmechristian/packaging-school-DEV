import React from 'react';
import { PrismicRichText } from '@prismicio/react';

import Instructor from './Instructor';
import CourseItems from './CourseItems';
import CourseInfo from './CourseInfo';
import CourseObjectives from './CourseObjectives';

const CourseMain = ({ data }) => {
  console.log(data);
  return (
    <section className='w-full bg-dark'>
      <div className='container__inner hero__padding'>
        <div className='grid grid-cols-1'>
          <div className='flex flex-col gap-5'>
            <div className='hero__headline'>
              <PrismicRichText field={data.course_title} />
            </div>
            <Instructor instructor={data.instructor} />
            <div className='text-white text-xl'>
              <PrismicRichText field={data.course_subtitle} />
            </div>
            <CourseItems data={data} />
            <div className='mt-8'>
              <CourseInfo
                price={data.course_price}
                hours={data.course_hours}
                lessons={data.course_lessons}
                videos={data.course_videos}
                certification={data.certificate_link}
              />
            </div>
            <div className='mt-16 flex flex-col gap-3'>
              <div className='font-semibold text-xl text-white '>
                What You Will Learn
              </div>
              <div className='text-white'>
                <PrismicRichText field={data.what_learned} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMain;
