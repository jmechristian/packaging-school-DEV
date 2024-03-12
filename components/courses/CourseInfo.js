import React, { useEffect, useState } from 'react';
import CTAButtonLarge from '../CTAButtonLarge';
import CTAButtonTrial from '../CTAButtonTrial';
import CourseCertificate from './CourseCertificate';
import VideoPlayer from '../VideoPlayer';
import { useSelector } from 'react-redux';
import HoverCard from '../shared/HoverCard';
import { FiCreditCard, FiMail, FiUser, FiUsers } from 'react-icons/fi';
import { LuRocket } from 'react-icons/lu';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const CourseInfo = ({
  seoImage,
  price,
  link,
  trialLink,
  certification,
  embedid,
  partOf,
}) => {
  return (
    <section>
      <div className='dark:bg-dark-mid bg-slate-200 shadow-lg rounded-md'>
        <div className='flex flex-col gap-4 border-b border-b-slate-200 dark:border-b-slate-700 p-4 md:p-6 pt-8 lg:pt-8 lg:p-8'>
          <div className='flex flex-col gap-10'>
            {embedid ? (
              <div className='block h-full max-w-md aspect-[16/9]'>
                <VideoPlayer videoEmbedLink={embedid} hideSupport={true} />
              </div>
            ) : (
              <div
                className='block h-full max-w-md aspect-[16/9] bg-cover bg-center'
                style={{
                  backgroundImage: `url(${
                    seoImage
                      ? seoImage
                      : 'https://packschool.s3.amazonaws.com/default-seo.png'
                  })`,
                }}
              ></div>
            )}
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <div className='font-medium black__white font-greycliff text-lg'>
                  Future Proof Your Skill
                </div>
                <div className='font-semibold black__white text-5xl lg:text-6xl font-greycliff'>
                  {price === 'FREE' ? 'Free!' : `$${price}`}
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <CTAButtonLarge link={link} />
                <CTAButtonTrial link={trialLink} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 p-4 xl:p-8'>
          {partOf && partOf.includes('APC') && (
            <HoverCard
              title={'Your Journey Starts Here'}
              href={'/certifications/get-to-know-apc'}
              subtitle={`This course as part of the  Autmotive Packaging Certificate. Exploring distinctive aspects of automotive packaging, with exclusive content unmatched by any other.`}
              Icon={LuRocket}
            />
          )}
          {partOf && partOf.includes('CPS') && (
            <HoverCard
              title={'Your Journey Starts Here'}
              href={'/certifications/get-to-know-cps'}
              subtitle={`This course as part of the  Certificate of Packaging Science, a comprehensive program covering all major aspects of packaging materials, processes, and design.`}
              Icon={LuRocket}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
