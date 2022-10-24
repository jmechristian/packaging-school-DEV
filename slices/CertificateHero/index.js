import React from 'react';
import { motion } from 'framer-motion';
import CertHeroHeadline from './components/CertHeroHeadline';
import CertHeroImage from './components/CertHeroImage';
import CTACountdown from './components/CTACountdown';
import YouTubeEmbed from '../../components/YouTubeEmbed';

const CertificateHero = ({ slice }) => {
  return (
    <section
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1666045015/pschool/gradient-bg4_rrmnwf.webp'
      )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='container__inner hero__padding flex flex-col gap-10'>
        <div className='flex flex-col lg:flex-row gap-3 md:gap-6'>
          <CertHeroHeadline slice={slice} />
          <CertHeroImage />
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
