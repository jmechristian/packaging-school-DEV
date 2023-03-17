import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSearch } from '../navigationSlice';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';

import { useRouter } from 'next/router';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Menu from './Menu';

const Navigation = () => {
  const dispatch = useDispatch();
  const { menuItemOpen } = useSelector((state) => state.nav);
  const { darkMode } = useSelector((state) => state.layout);
  const [showMenu, setShowMenu] = useState(false);
  const mainMenuRef = useRef();
  const { scrollY } = useScroll();
  const router = useRouter();

  useEffect(() => {
    return scrollY.onChange(() => updateY());
  });

  const updateY = () => {
    if (scrollY.current > 10) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  const variants = {
    show: {
      backgroundColor:
        menuItemOpen || showMenu
          ? 'rgba(15, 23, 42, 1)'
          : 'rgba(15, 23, 42, 0)',
      boxShadow:
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    hidden: {
      backgroundColor:
        menuItemOpen || showMenu
          ? 'rgba(15, 23, 42, 1)'
          : 'rgba(15, 23, 42, 0)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.header
      className={`w-full z-[30] hidden fixed lg:flex justify-center top-0 left-0 right-0`}
      ref={mainMenuRef}
      variants={variants}
      initial='hidden'
      animate={showMenu ? 'show' : 'hidden'}
    >
      <div
        className={`w-full max-w-7xl h-24 mx-auto ${
          showMenu ? 'text-white' : 'text-slate-900'
        } dark:text-white flex justify-between items-center container__inner`}
      >
        <div className='flex items-center h-full'>
          <div className='w-44 mr-6' onClick={() => router.push('/')}>
            <Image
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
              alt='Packaging School'
              layout='responsive'
              width={1163}
              height={267}
            />
          </div>
          <Menu />
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

export default Navigation;
