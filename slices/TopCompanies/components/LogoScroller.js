import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LogoScroller = ({ items }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const inView = useInView(carousel);

  useEffect(() => {
    setWidth(carousel.current.offsetWidth - carousel.current.scrollWidth);
  }, []);

  const scrollVariants = {
    start: {
      x: width,
      transition: {
        duration: 90 / items.length,
        ease: 'linear',
      },
    },
    stop: {
      x: 0,
    },
  };

  return (
    <div className='overflow-hidden cursor-pointer flex' ref={carousel}>
      <motion.div
        drag='x'
        dragConstraints={{
          right: 0,
          left: width,
        }}
        animate={inView ? 'start' : 'stop'}
        variants={scrollVariants}
        className='flex'
      >
        {items.map((item, i) => (
          <motion.div key={i} className='px-8 pt-6 min-w-max min-h-max'>
            <img
              src={item.logo.url}
              alt={item.logo.alt}
              className='w-full h-full pointer-events-none'
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoScroller;
