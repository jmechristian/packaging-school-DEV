import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { showSearch } from '../navigationSlice';
import { motion, useScroll } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Menu from './Menu';
import Logo from '../../../components/layout/Logo';

const Navigation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { menuItemOpen } = useSelector((state) => state.nav);
  const { darkMode } = useSelector((state) => state.layout);
  const { user } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);
  const mainMenuRef = useRef();
  const { scrollY } = useScroll();

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
          : 'rgba(15, 23, 42, 1)',
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
          : 'rgba(15, 23, 42, 1)',
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
        className={`w-full max-w-7xl h-24 mx-auto tedt-white flex justify-between items-center container__inner`}
      >
        <div className='flex items-center h-full'>
          <div className='w-72' onClick={() => router.push('/')}>
            <Logo showMenu={showMenu} />
          </div>
          <Menu />
        </div>
        <div className='flex gap-4 items-center'>
          <MagnifyingGlassIcon
            className={`w-6 h-6 stroke-white cursor-pointer`}
            onClick={() => dispatch(showSearch())}
          />
          {user ? (
            <div className='flex gap-4 items-center'>
              <div
                className='w-8 h-8 rounded-full bg-cover bg-center ring-1 ring-white'
                style={{ backgroundImage: `url(${user.picture})` }}
              ></div>
              <div className='text-white text-sm'>Hello {user.given_name}</div>
            </div>
          ) : (
            <>
              <UserCircleIcon
                className={`w-6 h-6 stroke-white hidden lg:block xl:hidden`}
              />
              <div
                className={` cursor-pointer dark:white font-greycliff  text-white hidden xl:block text-sm font-semibold xl:text-base`}
                onClick={() => router.push('/login')}
              >
                Log In
              </div>
              <button className='text-sm font-bold xl:text-base bg-clemson hover:bg-clemson-dark rounded hidden xl:block'>
                <div className='px-4 py-2 text-white font-greycliff'>
                  Join for Free
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
