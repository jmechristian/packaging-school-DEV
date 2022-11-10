import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { motion } from 'framer-motion';

const CertHeroHeadline = ({ slice }) => {
  const variants = {
    enter: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <div className='flex flex-col lg:flex-row gap-6 w-full lg:pr-12 justify-between items-center'>
      <div className='flex flex-col gap-6'>
        <motion.div
          className='hero__headline text-white'
          variants={variants}
          initial='hidden'
          animate='enter'
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 85,
            mass: 1,
            delay: 0.5,
          }}
        >
          <PrismicRichText field={slice.primary.headline} />
        </motion.div>
        <motion.div
          className='text-slate-400 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-prose'
          variants={variants}
          initial='hidden'
          animate='enter'
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 85,
            mass: 1,
            delay: 0.7,
          }}
        >
          <PrismicRichText field={slice.primary.subheadline} />
        </motion.div>
      </div>
    </div>
  );
};

export default CertHeroHeadline;
