import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import SlideBar from '../shared/SlideBar';
import { LessonContext } from '../../pages/lessons/[id]';
import { usePageVisibility } from '../../libs/visibility';
import dynamic from 'next/dynamic';

const SlidesPlayer = ({ images, title }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const { unlocked, toggleUnlocked, setPageContext } =
    useContext(LessonContext);

  const isVisible = usePageVisibility();

  if (!isVisible) {
    gtag('event', 'slide_exit', { slide: page, lesson_title: title });
  }

  useEffect(() => {
    setPageContext(page);
  }, [page, setPageContext]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);

    if (newDirection === 1 && page === images.length - 2) {
      toggleUnlocked(true);
      gtag('event', 'slide_completion');
    }
  };

  return (
    <>
      <div className='relative h-full flex flex-col items-center overflow-hidden'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className='w-auto h-auto max-h-full absolute'
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        {page != images.length - 1 && (
          <div
            className='next absolute z-[2] right-10 top-[90%] md:top-1/2 -translate-y-1/2'
            onClick={() => paginate(1)}
          >
            <div className='bg-dark-dark rounded-full h-10 md:h-16 md:w-16 w-10 shadow-lg flex justify-center items-center'>
              <ChevronRightIcon className='w-6 h-6 fill-white' />
            </div>
          </div>
        )}
        {page != 0 && (
          <div
            className='prev absolute z-[2] left-10 top-[90%] md:top-1/2 -translate-y-1/2'
            onClick={() => paginate(-1)}
          >
            <div className='bg-dark-dark rounded-full h-10 w-10 md:h-16 md:w-16 shadow-lg flex justify-center items-center'>
              <ChevronLeftIcon className='w-6 h-6 fill-white' />
            </div>
          </div>
        )}
      </div>
      <SlideBar slides={images} page={page} unlocked={true} />
    </>
  );
};

export default SlidesPlayer;
