import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const TopCompanies = ({ slice }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.offsetWidth - carousel.current.scrollWidth);
  }, []);

  return (
    <section className='lg:container__inner relative'>
      <div className='bg-base-dark lg:rounded py-12 w-full'>
        <div className='flex flex-col w-4/5 mx-auto'>
          <div className='text-center text-white text-2xl font-semibold'>
            Top Companies Trust{' '}
            <span className='text-clemson'>The Packaging School</span> for
            In-Demand Skills
          </div>
          <div className='overflow-hidden cursor-pointer flex' ref={carousel}>
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
        <ChevronLeftIcon className='w-8 h-8 fill-slate-300 absolute left-1 lg:left-12 bottom-24 z-50' />
        <ChevronRightIcon className='w-8 h-8 fill-slate-300 absolute right-1 lg:right-12 bottom-24 z-50' />
      </div>
    </section>
  );
};

export default TopCompanies;
