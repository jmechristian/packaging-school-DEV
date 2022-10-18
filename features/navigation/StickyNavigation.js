import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSearch } from '../navigation/navigationSlice';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const StickyNavigation = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  const [showMenu, setShowMenu] = useState(false);
  const mainMenuRef = useRef();
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
        showMenu
          ? 'fixed bg-white dark:bg-slate-900 shadow-md z-50'
          : 'absolute top-0 left-0'
      } w-full hidden lg:flex justify-center  bg-transparent`}
      ref={mainMenuRef}
      variants={variants}
      initial={false}
      animate={showMenu ? 'show' : 'hidden'}
    >
      <div className='w-full max-w-7xl h-28 text-slate-900 dark:text-white flex justify-between items-center container__inner'>
        <div className='flex items-center'>
          <div className='w-48 mr-6'>
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
          <div className='flex gap-6 text-sm font-medium xl:text-base cursor-pointer'>
            <div>About</div>
            <div>Certifications</div>
            <div>Courses</div>
            <div>For Teams</div>
            <div>Library</div>
            <div>Campus Store</div>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <MagnifyingGlassIcon
            className='w-6 h-6 stroke-slate-900 dark:stroke-base-brand cursor-pointer'
            onClick={() => dispatch(showSearch())}
          />
          <UserCircleIcon className='w-6 h-6 stroke-base-brand hidden lg:block xl:hidden' />
          <div className='dark:text-base-light text-slate-900 hidden xl:block text-sm font-medium xl:text-base'>
            Log In
          </div>
          <button className='text-sm font-medium xl:text-base bg-base-brand hover:bg-base-dark rounded hidden xl:block'>
            <div className='px-4 py-2 text-white'>Join for Free</div>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default StickyNavigation;
