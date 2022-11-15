import React, { useState } from 'react';
import RotatingCaret from '../../../components/RotatingCaret';
import { AnimatePresence, motion } from 'framer-motion';

const MobileMenuItemWrapper = ({ component, title, dropdown }) => {
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const variants = {
    enter: {
      scaleY: '100%',
      opacity: 1,
      transformOrigin: 'top',
    },
    exit: {
      opacity: 0,
      scaleY: '0%',
    },
  };

  return (
    <div className='border-b border-b-slate-400/50'>
      <div className='flex flex-col'>
        <div
          className='flex justify-between px-6 md:px-9 py-4 md:py-6'
          onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
        >
          <div className='font-bold text-xl md:text-3xl'>{title}</div>
          {dropdown && (
            <RotatingCaret
              styling='h-6 w-6 fill-slate-900'
              open={isMobileDropdownOpen}
            />
          )}
        </div>
        <AnimatePresence>
          {isMobileDropdownOpen && (
            <motion.div
              initial='exit'
              animate='enter'
              exit='exit'
              variants={variants}
              transition={{
                type: 'easeIn',
                duration: 0.2,
              }}
              onClick={() => setMobileDropdownOpen(false)}
            >
              {component}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenuItemWrapper;
