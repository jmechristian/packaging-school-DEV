import React from 'react';
import CTAButtonLarge from '../CTAButtonLarge';
import CTAButtonTrial from '../CTAButtonTrial';
import CourseCertificate from './CourseCertificate';
import YouTubeEmbed from '../YouTubeEmbed';

const CourseInfo = ({
  price,
  hours,
  lessons,
  videos,
  certification,
  embedid,
}) => {
  return (
    <section>
      <div className='dark:bg-slate-800 bg-white shadow-lg rounded-md'>
        <div className='flex flex-col gap-4 border-b border-b-slate-200 dark:border-b-slate-700 p-6 pt-8 lg:pt-8 lg:p-8'>
          <div className='flex flex-col gap-10'>
            <div className='hidden lg:block'>
              {embedid && <YouTubeEmbed embedid={embedid} />}
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <div className='font-medium black__white font-plex text-lg'>
                  Future Proof Your Skills
                </div>
                <div className='font-bold black__white text-5xl'>${price}</div>
              </div>
              <div className='flex flex-col gap-4'>
                <CTAButtonLarge />
                <CTAButtonTrial />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4  p-8'>
          <CourseCertificate certification={certification} />
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
