import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TopCompanies = ({ slice }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.offsetWidth - carousel.current.scrollWidth);
  }, []);

  return (
    <section className='lg:container__inner'>
      <div className='bg-base-dark lg:rounded py-12 w-full'>
        <div className='flex flex-col w-4/5 mx-auto'>
          <div className='text-center text-white text-2xl font-semibold'>
            Top Companies Trust{' '}
            <span className='text-clemson'>The Packaging School</span> for
            On-Demand Skills
          </div>
          <div className='overflow-hidden cursor-pointer' ref={carousel}>
            <motion.div
              drag='x'
              dragConstraints={{
                right: 0,
                left: width,
              }}
              className='flex'
            >
              {slice?.items?.map((item, i) => (
                <motion.div key={i} className='p-8 min-w-max min-h-max'>
                  <img
                    src={item.logo.url}
                    alt={item.logo.alt}
                    className='w-full h-full pointer-events-none'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
