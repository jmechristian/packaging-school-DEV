import React, { useRef } from 'react';
import HeadlineMotion from '../helpers/HeadlineMotion';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const MultiImageHero = ({ headline, subheadline }) => {
  const imagesRef = useRef();
  const isInView = useInView(imagesRef);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className='relative isolate -z-10'>
      <div className='overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
            <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-greycliff'>
                <HeadlineMotion>{headline && headline}</HeadlineMotion>
              </h1>
              <motion.p
                className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'
                animate={isInView && { opacity: 1, transition: { delay: 0.4 } }}
                initial={{ opacity: 0 }}
              >
                {subheadline}
              </motion.p>
            </div>
            <motion.div
              className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'
              ref={imagesRef}
              variants={container}
              initial='hidden'
              animate='show'
            >
              <motion.div
                className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'
                variants={item}
              >
                <div className='relative'>
                  <img
                    src='https://packschool.s3.amazonaws.com/partner-1.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </motion.div>
              <motion.div
                className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'
                variants={item}
              >
                <div className='relative'>
                  <img
                    src='https://packschool.s3.amazonaws.com/partner-2.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative'>
                  <img
                    src='https://packschool.s3.amazonaws.com/partner-3.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </motion.div>
              <motion.div
                className='w-44 flex-none space-y-8 pt-32 sm:pt-0'
                variants={item}
              >
                <div className='relative'>
                  <img
                    src='https://packschool.s3.amazonaws.com/partner-4.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative'>
                  <img
                    src='https://packschool.s3.amazonaws.com/partner-5.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiImageHero;
