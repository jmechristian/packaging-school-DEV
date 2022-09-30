import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';

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
    <div className='w-full bg-white sticky top-0 '>
      <section className='container__inner flex w-full justify-between items-start lg:items-center py-4 relative'>
        <div className=' font-medium flex flex-col lg:hidden'>
          <div
            className='flex text-base-brand gap-2 items-center'
            onClick={() => setContentMenuOpen(!contentMenuOpen)}
          >
            Jump To{' '}
            <ChevronDownIcon className='w-5 h-5 stroke-base-brand cursor-pointer' />
          </div>
          <motion.div
            className='flex flex-col gap-3 static bg-white py-4'
            variants={menuVariants}
            initial={false}
            animate={contentMenuOpen ? 'open' : 'closed'}
            style={{ display: contentMenuOpen ? 'flex' : 'none' }}
          >
            {slice?.items?.map((item, i) => (
              <a href={item.link_ref} key={i}>
                <span className='first:text-base-brand'>{item.link_name}</span>
              </a>
            ))}
          </motion.div>
        </div>
        <div className='hidden lg:flex gap-6 lg:items-center font-medium'>
          {slice?.items?.map((item, i) => (
            <a
              href={item.link_ref}
              key={i}
              className='first:text-base-brand text-zinc-800'
            >
              <span>{item.link_name}</span>
            </a>
          ))}
        </div>
        <div className='rounded'>
          <div className='bg-base-dark text-white text-sm px-4 py-2 rounded'>
            Enroll Now
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertMenu;
