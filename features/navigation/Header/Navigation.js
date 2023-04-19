import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { showSearch } from '../navigationSlice';
import { motion, useScroll } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Menu from './Menu';
import Logo from '../../../components/layout/Logo';
import ProfileBlock from './ProfileBlock';

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

  // const variants = {
  //   show: {
  //     backgroundColor:
  //       menuItemOpen || showMenu
  //         ? 'rgba(15, 23, 42, 1)'
  //         : 'rgba(15, 23, 42, 1)',
  //     boxShadow:
  //       '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  //     transition: {
  //       duration: 0.2,
  //       ease: 'easeInOut',
  //     },
  //   },
  //   hidden: {
  //     backgroundColor:
  //       menuItemOpen || showMenu
  //         ? 'rgba(15, 23, 42, 1)'
  //         : 'rgba(15, 23, 42, 1)',
  //     transition: {
  //       duration: 0.2,
  //       ease: 'easeInOut',
  //     },
  //   },
  // };

  return (
    <motion.header
      className={`w-full z-[100] hidden fixed lg:flex justify-center top-0 left-0 right-0 bg-slate-900`}
    >
      <div
        className={`w-full max-w-7xl h-24 mx-auto text-white flex justify-between items-center`}
      >
        <div className='flex items-center h-full gap-10'>
          <div className='w-52' onClick={() => router.push('/')}>
            <Logo showMenu={showMenu} />
          </div>
          <Menu />
        </div>
        <div className='flex items-center gap-4'>
          <MagnifyingGlassIcon
            className={`w-6 h-6 stroke-white cursor-pointer`}
            onClick={() => dispatch(showSearch())}
          />
          <ProfileBlock user={user && user} />
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
