import React, { useRef } from 'react';
import AllCourseMenu from './AllCourseMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileFilterClosed } from './courseFilterSlice';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/24/solid';

const AllCourseMobileMenu = () => {
  const dispatch = useDispatch();
  const { mobileCourseFilter } = useSelector((state) => state.course_filter);
  const backdropRef = useRef();
  const menuRef = useRef();

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      x: '-100%',
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  const backdropVariants = {
    show: {
      opacity: 0.9,
      display: 'block',
    },
    hide: {
      opacity: 0,
      display: 'none',
    },
  };

  return (
    <>
      <motion.div
        className='fixed top-0 right-0 bottom-0 left-0 bg-slate-900 opacity-90 z-40'
        initial='hide'
        variants={backdropVariants}
        animate={mobileCourseFilter ? 'show' : 'hide'}
        ref={backdropRef}
        onClick={() => dispatch(setMobileFilterClosed())}
      ></motion.div>
      <motion.div
        className='w-3/4 bg-slate-200 fixed top-0 left-0 z-50 h-screen drop-shadow-md'
        variants={menuVariants}
        initial='closed'
        animate={mobileCourseFilter ? 'open' : 'closed'}
        ref={menuRef}
      >
        <div className='pt-6 pb-8 px-5 flex flex-col gap-10 h-full'>
          <div className='flex justify-between items-start'>
            <div className='w-3/5'>
              <Image
                src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_dark_craqzu.svg'
                width='511'
                height='117'
                layout='responsive'
                alt='The Packaging School'
              />
            </div>
            <button onClick={() => dispatch(setMobileFilterClosed())}>
              <XCircleIcon className='fill-slate-900 h-7 w-7' />
            </button>
          </div>
          <AllCourseMenu />
        </div>
      </motion.div>
    </>
  );
};

export default AllCourseMobileMenu;
