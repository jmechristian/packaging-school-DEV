import React from 'react';
import { XMarkIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { closeMobileMenu } from '../navigationSlice';

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.nav);

  const variants = {
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

  const itemVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className='w-full h-screen fixed z-50 bg-white top-0 left-0'
      variants={variants}
      initial={false}
      animate={mobileMenuOpen ? 'open' : 'closed'}
    >
      <div className='pt-6 px-6 font-bold text-3xl'>Mobile Menu</div>
      <XMarkIcon
        className='w-7 h-7 stroke-zinc-900 absolute right-4 top-6'
        onClick={() => dispatch(closeMobileMenu())}
      />
    </motion.div>
  );
};

export default MobileMenu;
