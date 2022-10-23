import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillsCTA = () => {
  const skillsRef = useRef();
  const inView = useInView(skillsRef);

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 85,
        mass: 1,
        delay: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.div
      className='w-full px-4 py-5 md:px-8 md:py-10 xl:px-10 bg-gradient-to-b from-base-dark to-clemson md:bg-gradient-to-r rounded-md'
      ref={skillsRef}
      variants={variants}
      initial='hidden'
      animate={inView ? 'enter' : 'hidden'}
    >
      <div className='flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-6'>
        <div className='flex flex-col gap-3'>
          <div className='font-bold text-2xl md:text-3xl font-plex  text-white'>
            Not Sure Where to Start?
          </div>
          <div className='md:text-xl text-white lg:w-4/5'>
            Know exactly where your team stands with our curated skills test.
          </div>
        </div>
        <button className='bg-dark py-5 px-6 rounded-md shadow-xl'>
          <div className='font-bold text-sm lg:text-lg text-white uppercase'>
            Start YOUR Skills Assesment
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default SkillsCTA;
