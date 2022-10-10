import React from 'react';
import CTAButtonLarge from '../CTAButtonLarge';
import CTAButtonTrial from '../CTAButtonTrial';
import CourseDetails from './CourseDetails';
import CourseCertificate from './CourseCertificate';

const CourseInfo = ({ price, hours, lessons, videos, certification }) => {
  return (
    <section>
      <div className='bg-base-dark-highlight rounded'>
        <div className='flex flex-col gap-4 border-b border-b-gray-600 p-8'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <div className='font-medium text-white text-lg'>
                Future Proof Your Skills
              </div>
              <div className='font-bold text-white text-6xl'>${price}</div>
            </div>
            <div className='flex flex-col gap-2'>
              <CTAButtonLarge />
              <CTAButtonTrial />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 border-b border-b-gray-600 p-8'>
          <CourseDetails hours={hours} lessons={lessons} videos={videos} />
        </div>
        <div className='flex flex-col gap-4  p-8'>
          <CourseCertificate certification={certification} />
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
