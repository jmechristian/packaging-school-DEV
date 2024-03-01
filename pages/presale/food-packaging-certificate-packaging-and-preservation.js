import React from 'react';
import PresaleCountdown from '../../components/shared/PresaleCountdown';
import FuzzyOverlay from '../../components/shared/FuzzyOverlay';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Page = () => {
  const sequence = [
    ['ul', { opacity: 1 }],
    ['li', { x: [-100, 0] }, { at: 1 }],
  ];

  return (
    <div className='w-full max-w-7xl mx-auto px-5 xl:px-0 flex flex-col gap-20 pt-10 pb-20'>
      <div className='bg-amber-400 rounded-2xl w-full px-24 py-16'>
        <div className='flex flex-col md:flex-row md:items-center w-full justify-between'>
          <motion.div
            className='flex flex-col gap-4 max-w-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            <div>
              <h1 className='text-3xl xl:text-4xl dark:text-white font-semibold'>
                Food Packaging Certificate: Packaging and Preservation
              </h1>
            </div>
            <div>
              <p className='text-lg leading-snug'>
                Responding to the vital need for quality and safety in the
                evolving food sector, we&apos;re thrilled to announce the
                pre-order for our inaugural course in the Food Packaging
                Certificate, focusing on cutting-edge packaging and preservation
                techniques to elevate industry standards and meet client
                demands.
              </p>
            </div>
            <div className='flex items-center gap-5 mt-4'>
              <div
                className='bg-white cursor-pointer px-4 py-2 text-lg rounded-lg text-black shadow border-black border font-bold'
                onClick={() =>
                  window.open(
                    'https://learn.packagingschool.com/enroll/2893149?price_id=3736463&coupon=fpcpresell',
                    '_blank'
                  )
                }
              >
                Pre-Order Now!
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-4xl font-bold'>$199</div>
                <div className='text-2xl font-medium line-through'>$399</div>
              </div>
            </div>
            <div className='w-full bg-black px-5 pt-2 pb-3 max-w-md mt-3 flex flex-col gap-2 rounded-lg'>
              <div className='font-bold text-clemson text-lg w-full text-center'>
                50% off till April 2!
              </div>
              <PresaleCountdown date={'04/03/2024'} />
            </div>
          </motion.div>
          <AnimatePresence>
            <motion.div
              className='aspect-[1/1] relative w-full max-w-[450px] bg-neutral-900 rounded-xl shadow-2xl border-black border-4 overflow-hidden'
              initial={{ scale: 0, borderRadius: '100%' }}
              animate={{ scale: 1, borderRadius: '15%', rotate: 360 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <motion.div
                className='w-full aspect-[1/1] absolute inset-0 z-10 bg-neutral-800'
                animate={{
                  opacity: [
                    1, 0, 1, 0, 1, 0, 1, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0,
                    0.75, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0.25, 0, 0.25, 0,
                    0.25, 0, 0.25, 0,
                  ],
                }}
                transition={{ delay: 0.5, type: 'keyframes', duration: 1.5 }}
              >
                <FuzzyOverlay />
              </motion.div>
              <motion.div
                className='flex flex-col w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: 'anticipate' }}
              >
                <motion.div
                  animate={{ y: ['0%', '-33.33333%', '-66.66666%'] }}
                  transition={{ delay: 2, type: 'spring', duration: 6 }}
                >
                  <div className='w-full'>
                    <img
                      className='w-full'
                      src='https://packschool.s3.amazonaws.com/foodpackaging-presale-slide1.webp'
                      className='w-full'
                      alt='food packaging slide 1'
                    />
                  </div>
                  <div className='w-full'>
                    <img
                      className='w-full'
                      src='https://packschool.s3.amazonaws.com/foodpackaging-presale-slide3.webp'
                      className='w-full'
                      alt='food packaging slide 2'
                    />
                  </div>
                  <div className='w-full'>
                    <img
                      className='w-full'
                      src='https://packschool.s3.amazonaws.com/foodpackaging-presale-slide4.webp'
                      className='w-full'
                      alt='food packaging slide 4'
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className='flex items-center gap-6 w-full py-16'>
        <div className='w-full h-full relative aspect-[4/3] max-w-[600px] mx-auto'>
          <div className='absolute aspect-[60/31] w-full max-w-[300px] bg-white shadow-2xl border border-black z-30 -left-16 -top-10'>
            <Image
              src={
                'https://packschool.s3.amazonaws.com/foodpackaging-screenshot1.png'
              }
              alt='Food Packaging Certificate: Packaging and Preservation screenshot'
              width={600}
              height={310}
            />
          </div>
          <div className='absolute aspect-[60/31] w-full bg-white shadow-lg  border border-black z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <Image
              src={
                'https://packschool.s3.amazonaws.com/foodpackaging-screenshot2.png'
              }
              alt='Food Packaging Certificate: Packaging and Preservation screenshot'
              width={600}
              height={310}
            />
          </div>
          <div className='absolute aspect-[60/31] w-full max-w-[350px] bg-white shadow-xl border border-black z-20 -bottom-16   right-16'>
            <Image
              src={
                'https://packschool.s3.amazonaws.com/foodpackaging-screenshot3.png'
              }
              alt='Food Packaging Certificate: Packaging and Preservation screenshot'
              width={600}
              height={310}
            />
          </div>
        </div>
        <div className='flex flex-col gap-6 max-w-md'>
          <div className='text-2xl xl:text-3xl font-semibold'>
            What You Will Cover
          </div>
          <div>
            <p className='text-lg'>
              Within this course, packaging requirements of different foods will
              be discussed. Different food products vary in composition,
              affecting spoilage type and shelf life differently. The ways
              packaging can be used to control deteriorative reactions
              throughout the supply chain will be discussed for a variety of
              products. We will also highlight many strategies used in industry
              as well as material selection. We have divided this course into
              modules based on the general food type, such as dairy or meat or
              low- and intermediate-moisture foods.
            </p>
          </div>
          <div
            className='bg-clemson w-fit cursor-pointer px-5 py-3 hover:bg-base-brand transition-all ease-in-out text-lg rounded-lg text-white shadow border-black border font-bold'
            onClick={() =>
              window.open(
                'https://learn.packagingschool.com/enroll/2893149?price_id=3736463&coupon=fpcpresell',
                '_blank'
              )
            }
          >
            Pre-Order Now! Offer Ends April 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
