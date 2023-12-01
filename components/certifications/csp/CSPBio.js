import React from 'react';
import NewCouseCard from '../../shared/NewCouseCard';
import { AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const CSPBio = () => {
  return (
    <div
      className='w-full h-full bg-base-mid rounded-2xl shadow-xl max-w-7xl mx-auto scroll-mt-36'
      id='reviews'
    >
      <div className='w-full flex justify-between items-center p-12'>
        <div className='flex flex-col gap-9'>
          <div>
            <h2 className='text-5xl text-white max-w-xl'>
              Want to learn more about sustainability?
            </h2>
          </div>
          <div className='w-full max-w-prose xl:text-lg text-white font-medium'>
            With over two decades of industry experience, Dr. Sandeep Kulkarni,
            founder and President of KoolEarth Solutions Inc., and an adjunct
            professor at The Packaging School, guides students through the
            comprehensive exploration of bioplastics, offering insights,
            strategies, and a forward-looking perspective on integrating
            bioplastics into current applications.
          </div>
        </div>
        <div>
          <NewCouseCard
            title={'Bioplastics for Packaging'}
            description={
              'An online course that provides an introduction to the area of bioplastics and offers guidance on the usage of these materials for packaging applications.'
            }
            background={
              'https://packschool.s3.amazonaws.com/bioplastics%402x.png'
            }
            link={
              'https://packagingschool.com/courses/bioplastics-for-packaging-with-dr-sandeep-kulkarni'
            }
            link_text={'Select Course'}
            Icon={RocketLaunchIcon}
            callout={'Learning Boost'}
            video={'https://youtu.be/f0z17FbxJjU'}
          />
        </div>
      </div>
    </div>
  );
};

export default CSPBio;
