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
    console.log(scrollXProgress.current);
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
      className='overflow-x-scroll snap-x mx-0 lg:mx-6 flex scroll-ml-16 flex-col scroll-smooth'
      ref={scrollerRef}
      id='scrollers'
    >
      <motion.div className='grid grid-flow-col gap-6 md:gap-8'>
        {children}
      </motion.div>
      {scrollPercent != 1 && (
        <motion.div
          className='hidden lg:flex w-12 h-12 rounded-full bg-base-mid/80 dark:bg-white/40 shadow-lg backdrop-blur-sm absolute top-1/2 -translate-y-1/2 right-5 justify-center items-center z-40'
          onClick={scrollRight}
        >
          <ChevronRightIcon className='w-8 h-8 stroke-white ml-1' />
        </motion.div>
      )}
      {scrollPercent != 0 && (
        <motion.div
          className='hidden lg:flex w-12 h-12 rounded-full bg-base-mid/60 dark:bg-white/40 shadow-lg backdrop-blur-sm absolute top-1/2 -translate-y-1/2 left-5 justify-center items-center z-40'
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className='w-8 h-8 stroke-white mr-1' />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SnapScroller;
