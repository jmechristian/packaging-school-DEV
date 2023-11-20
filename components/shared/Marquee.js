import React from 'react';
import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: [0, -3000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 28,
        ease: 'linear',
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className='marquee'>
        <motion.div
          className='track'
          variants={marqueeVariants}
          animate='animate'
        >
          <h1 className='font-bit text-4xl lg:text-7xl text-brand-yellow font-normal'>
            25% Off Everything! 25% Off Everything! 25% Off Everything! 25% Off
            Everything! 25% Off Everything! 25% Off Everything! 25% Off
            Everything! 25% Off Everything! 25% Off Everything! 25% Off
            Everything!
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
