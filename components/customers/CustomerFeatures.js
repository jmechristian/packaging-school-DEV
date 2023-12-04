import React from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  RocketLaunchIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';

import NewCouseCard from '../shared/NewCouseCard';

const CustomerFeatures = ({ featured }) => {
  return (
    <motion.div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9 overflow-hidden'>
      <NewCouseCard
        title={'Uniliever Packaging Bootcamp 101'}
        description={
          'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.'
        }
        background={'https://packschool.s3.amazonaws.com/unilever-brands-1.png'}
        link={'#'}
        link_text={'Select Course'}
        Icon={RocketLaunchIcon}
        callout={'GreenBlue Developed'}
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

export default CustomerFeatures;
