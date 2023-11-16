import React from 'react';
import FullWidthDropDown from '../components/shared/FullWidthDropDown';
import {
  AcademicCapIcon,
  BoltIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SignalIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import NewCouseCard from '../components/shared/NewCouseCard';

const Page = () => {
  const HighlightContent = ({ link }) => {
    return (
      <motion.div className='px-0 lg:px-6 w-full grid lg:grid-cols-3 gap-12 pb-3 my-9 overflow-hidden'>
        <NewCouseCard
          title={'Uniliever Packaging Bootcamp 101'}
          description={
            'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.'
          }
          background={
            'https://packschool.s3.amazonaws.com/unilever-brands-1.png'
          }
          link={'#'}
          link_text={'Select Course'}
          Icon={RocketLaunchIcon}
          callout={'Unilever Developed'}
          video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
          id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
        />
        <NewCouseCard
          title={'Sustainable Packaging'}
          description={
            'Have you ever wondered how grocery store produce ships from the farm to the grocery store?'
          }
          background={
            'https://packschool.s3.amazonaws.com/sustainable-seoImage.png'
          }
          link={'#'}
          link_text={'Select Course'}
          Icon={SparklesIcon}
          callout={'Most Popular'}
          video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
          id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
        />
        <NewCouseCard
          title={'Shoe Shopping From Home'}
          description={
            "Does packaging influence value? Let's investigate the relationship between product packaging and consumer to analyze how design can influence purchase choice."
          }
          background={'https://packschool.s3.amazonaws.com/demo-lesson.png'}
          link={'/lessons/shoe-shopping-from-home'}
          link_text={'View Lesson'}
          Icon={SignalIcon}
          callout={'Latest Lesson'}
          id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
        />
      </motion.div>
    );
  };

  return (
    <div className='w-full max-w-7xl px-3 md:px-6 flex flex-col gap-4 md:gap-6 lg:gap-12 py-6 lg:py-9 mx-auto'>
      <div className='w-full h-full grid md:grid-cols-2 gap-x-24 py-16'>
        <div className='flex flex-col gap-9'>
          <div className='w-full max-w-[70%]'>
            <img
              src='https://packschool.s3.amazonaws.com/logos/isbt-logo.png'
              alt='isbt logo'
              className='w-full h-auto'
            />
          </div>
          <div className='flex flex-col gap-6'>
            <div>
              The ISBT (formerly SSDT) was founded in Washington, D.C. in 1953.
              It is unique in being the only organization whose sole interest is
              the technical and scientific aspects of soft drinks and beverages.
              Membership is open to any person engaged in the science,
              technology or production of soft drinks or beverages, including
              those suppliers to the beverage industry whose principal
              occupation is substantially technical in nature.
            </div>
            <div
              className=' w-fit cursor-pointer flex gap-3 items-center'
              onClick={() =>
                window.open('https://www.isbt.com/membership.asp', '_blank')
              }
            >
              <div className='text-base-brand font-bold text-lg'>
                Learn More about ISBT<sup>&copy;</sup>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-full'>
          <div className='aspect-[16/9] bg-neutral-500'>Video</div>
        </div>
      </div>
      <div>
        <FullWidthDropDown
          title={'Your Courses'}
          Icon={AcademicCapIcon}
          bg='bg-base-mid'
          bgdark='bg-base-dark'
          content={<div>Chill Out</div>}
          highlight={'bg-clemson'}
          bgContent={'bg-neutral-200 border'}
        />
      </div>
      <div>All Courses</div>
    </div>
  );
};

export default Page;
