import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const ContentMenu = ({ items }) => {
  const [contentMenuOpen, setContentMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => updateY());
  });

  const updateY = () => {
    if (scrollY.current > 75) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

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
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      className='fixed flex-col top-0 left-0 right-0 z-50 bg-white shadow-xl'
      ref={menuRef}
      variants={variants}
      initial={false}
      animate={showMenu ? 'show' : 'hidden'}
      style={{ display: showMenu ? 'flex' : 'none' }}
    >
      <motion.div
        className='w-full h-2 bg-base-brand'
        style={{ transformOrigin: '0%', scaleX: scrollYProgress }}
      ></motion.div>
      <section className='container__inner flex w-full justify-between items-start lg:items-center py-4 relative'>
        <div className=' font-medium flex flex-col lg:hidden'>
          <div
            className='flex text-zinc-800 gap-2 items-center leading-loose'
            onClick={() => setContentMenuOpen(!contentMenuOpen)}
          >
            Jump To{' '}
            <ChevronDownIcon className='w-5 h-5 stroke-zinc-800 cursor-pointer' />
          </div>
          <motion.div
            className='flex flex-col gap-3 static bg-white py-4'
            variants={menuVariants}
            initial={false}
            animate={contentMenuOpen ? 'open' : 'closed'}
            style={{ display: contentMenuOpen ? 'flex' : 'none' }}
          >
            {items?.map((item, i) => (
              <a
                href={item.link_ref}
                key={i}
                onClick={() => setContentMenuOpen(!contentMenuOpen)}
                className='first:text-base-brand text-zinc-800'
              >
                <span>{item.link_name}</span>
              </a>
            ))}
          </motion.div>
        </div>
        <div className='hidden lg:flex gap-6 lg:items-center font-medium'>
          {items?.map((item, i) => (
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
          <motion.div className='bg-clemson text-white font-semibold text-sm px-4 py-2 rounded'>
            Enroll Now
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContentMenu;
