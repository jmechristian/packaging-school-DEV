import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { motion, useScroll } from 'framer-motion';
import { showSearch, showMobileMenu } from './navigationSlice';
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const MobileNavigation = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  const [showMenu, setShowMenu] = useState(false);
  const mobileMenuRef = useRef();
  const { scrollY } = useScroll();

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
      opacity: 1,
      y: -90,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.header
      className={`w-full ${
        showMenu ? 'fixed bg-white dark:bg-slate-900 shadow-md' : 'absolute'
      } top-0 left-0 right-0 block lg:hidden bg-transparent z-40`}
      ref={mobileMenuRef}
      variants={variants}
      initial={false}
      animate={showMenu ? 'show' : 'hidden'}
    >
      <section className='h-20 w-full container__inner'>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='w-40'>
            {darkMode ? (
              <Image
                src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
                alt='Packaging School'
                layout='responsive'
                width={1163}
                height={267}
              />
            ) : (
              <Image
                src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_dark_craqzu.svg'
                alt='Packaging School'
                layout='responsive'
                width={1163}
                height={267}
              />
            )}
          </div>
          <div className='flex gap-3'>
            <MagnifyingGlassIcon
              className='w-6 h-6 stroke-slate-900 stroke-2 dark:stroke-white cursor-pointer'
              onClick={() => dispatch(showSearch())}
            />
            <EllipsisVerticalIcon
              className='w-6 h-6 stroke-slate-900 stroke-2 dark:stroke-white cursor-pointer'
              onClick={() => dispatch(showMobileMenu())}
            />
          </div>
        </div>
      </section>
    </motion.header>
  );
};

export default MobileNavigation;
