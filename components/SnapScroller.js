import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const SnapScroller = ({ children, title }) => {
  const scrollerRef = useRef();
  const { scrollXProgress } = useScroll({ container: scrollerRef });
  const [scrollPercent, setScrollPercent] = useState(1);

  useEffect(() => {
    setScrollPercent(scrollXProgress.current);
    return scrollXProgress.onChange(() => updateXProgress());
  }, [scrollXProgress]);

  const updateXProgress = () => {
    setScrollPercent(scrollXProgress.current);
  };

  const scrollRight = () => {
    const right = scrollerRef.current;
    right.scrollBy(350, 0);
  };

  const scrollLeft = () => {
    const left = scrollerRef.current;
    left.scrollBy(-350, 0);
  };

  return (
    <motion.div
      className='overflow-x-scroll snap-x mx-6 flex scroll-ml-16 flex-col scroll-smooth'
      ref={scrollerRef}
      id='scrollers'
      layoutScroll
    >
      <motion.div className='grid grid-flow-col gap-5'>{children}</motion.div>
      {scrollPercent != 1 && (
        <motion.div
          className='hidden lg:flex w-16 h-16 rounded-full bg-base-mid cursor-pointer dark:bg-clemson-dark shadow-lg backdrop-blur-sm absolute top-1/2 -translate-y-1/2 right-4 justify-center items-center z-40'
          onClick={scrollRight}
        >
          <ChevronRightIcon className='w-8 h-8 stroke-white stroke-2 ml-1' />
        </motion.div>
      )}
      {scrollPercent != 0 && (
        <motion.div
          className='hidden lg:flex w-16 h-16 rounded-full cursor-pointer bg-base-mid dark:bg-clemson-dark shadow-lg backdrop-blur-sm absolute top-1/2 -translate-y-1/2 left-4 justify-center items-center z-40'
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className='w-8 h-8 stroke-white stroke-2 mr-1' />
        </motion.div>
      )}
      <motion.div className='absolute z-30 top-0 right-0 bg-gradient-to-l from-slate-900 w-40'></motion.div>
    </motion.div>
  );
};

export default SnapScroller;
