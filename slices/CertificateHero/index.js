import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { motion } from 'framer-motion';
import CTACountdown from './components/CTACountdown';
import YouTubeEmbed from '../../components/YouTubeEmbed';

const CertificateHero = ({ slice }) => {
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
    <section
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1666045015/pschool/gradient-bg4_rrmnwf.webp'
      )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='container__inner hero__padding flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row gap-10 w-full justify-between items-center'>
          <div className='flex flex-col gap-6 lg:w-6/12 lg:pr-4'>
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
              className='text-slate-300 text-lg xl:text-xl leading-relaxed max-w-prose'
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
          <motion.div
            className='flex lg:justify-end w-full lg:w-6/12 xl:w-5/12'
            variants={variants}
            initial='hidden'
            animate='enter'
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 95,
              mass: 1,
              delay: 0.9,
            }}
          >
            <YouTubeEmbed embedid={slice.primary.youtube_id} />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 85,
            mass: 1,
            delay: 1.3,
          }}
        >
          <CTACountdown headline={slice.primary.cta_headline} />
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateHero;
