import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const CertMenu = ({ slice }) => {
  const [contentMenuOpen, setContentMenuOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  return (
    <section className='container__inner flex relative w-full justify-between items-center mt-3 lg:mt-5'>
      <div className=' font-medium flex lg:hidden'>
        <motion.div
          className='flex flex-col gap-3 absolute top-12'
          variants={menuVariants}
          initial={false}
          animate={contentMenuOpen ? 'open' : 'closed'}
        >
          {slice?.items?.map((item, i) => (
            <span className='first:text-base-brand' key={i}>
              {item.link_name}
            </span>
          ))}
        </motion.div>
        <div
          className='flex text-base-brand gap-2 items-center'
          onClick={() => setContentMenuOpen(!contentMenuOpen)}
        >
          Jump To{' '}
          <ChevronDownIcon className='w-5 h-5 stroke-base-brand cursor-pointer' />
        </div>
      </div>
      <div className='hidden lg:flex gap-6 font-medium'>
        {slice?.items?.map((item, i) => (
          <span className='first:text-base-brand' key={i}>
            {item.link_name}
          </span>
        ))}
      </div>
      <div className='rounded'>
        <div className='bg-base-dark text-white text-sm px-4 py-2 rounded'>
          Enroll Now
        </div>
      </div>
    </section>
  );
};

export default CertMenu;
