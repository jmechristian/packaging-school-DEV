import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import MobileMenuContent from '../MobileMenuItems/MobileMenuContent';

const MobileMenu = () => {
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
      className='w-full h-screen fixed z-50 bg-slate-200 top-0 left-0'
      variants={variants}
      initial={false}
      animate={mobileMenuOpen ? 'open' : 'closed'}
    >
      <MobileMenuContent />
    </motion.div>
  );
};

export default MobileMenu;
