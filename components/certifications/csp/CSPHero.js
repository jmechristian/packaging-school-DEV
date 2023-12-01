import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

import VideoPlayer from '../../VideoPlayer';
import FadeIn from '../../../helpers/FadeIn';

const CSPHero = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-7xl mx-auto lg:pr-6 xl:pr-0'>
      <div className='grid gap-9 lg:gap-6 lg:grid-cols-2 overflow-hidden w-full h-full'>
        <div className='w-full h-full p-6 xl:p-0 flex flex-col justify-center max-w-xl mx-auto'>
          <div className='flex flex-col gap-10'>
            <div>
              <FadeIn>
                <h1 className='text-4xl xl:text-5xl  dark:text-white'>
                  Certificate of Sustainable Packaging (CSP)
                </h1>
              </FadeIn>
            </div>
            <div>
              <FadeIn>
                <p className='lg:text-lg lg:leading-normal font-greycliff text-slate-700 dark:text-gray-500 tracking-wide'>
                  In the quest for sustainable packaging, the Packaging School
                  introduces a transformative program empowering industry
                  professionals to navigate the complexities of sustainable
                  design. This initiative equips companies with internal
                  champions, well-versed in the dos and don&apos;ts of
                  sustainable packaging, fostering a positive force for change
                  within organizations.
                </p>
              </FadeIn>
            </div>
            <div>
              <FadeIn>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                  <button
                    className='w-full md:w-fit px-9 bg-clemson rounded-lg py-4 text-white font-semibold font-greycliff xl:text-xl'
                    onClick={() =>
                      router.push(
                        'https://learn.packagingschool.com/enroll/2772370?price_id=3600658'
                      )
                    }
                  >
                    Enroll Now
                  </button>
                  <div
                    className='flex gap-1.5 items-center cursor-pointer'
                    onClick={() =>
                      window.open(
                        'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ35Hm4GpLbs5oMIYuUcefaOcrSb_F1jFkU_9mCus2H5P9gIObXySikly5zZxVPXuiw-Ou5wZwfg',
                        '_blank'
                      )
                    }
                  >
                    <div className='font-semibold xl:text-xl font-greycliff dark:text-base-brand'>
                      Schedule a FREE Live Demo
                    </div>
                    <div>
                      <ArrowLongRightIcon className='w-6 h-6 stroke-slate-900 dark:stroke-base-brand' />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div
          className='w-full h-full bg-contain bg-center relative bg-no-repeat aspect-[4/3]'
          style={{
            backgroundImage: `url('https://packschool.s3.amazonaws.com/csp-hero.png')`,
          }}
        >
          <div className='w-full h-full aspect-[16/9] max-w-[78%] mx-auto absolute -translate-x-1/2 left-1/2'>
            <VideoPlayer
              videoEmbedLink={'https://player.vimeo.com/video/888839253'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSPHero;
