import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StudentSuccess = () => {
  const studentRef = useRef();
  const inView = useInView(studentRef);

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 85,
        mass: 1,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.section
      className='flex dark:border rounded dark:border-black dark:bg-white bg-base-dark drop-shadow-lg p-8 lg:p-12'
      ref={studentRef}
      variants={variants}
      initial='hidden'
      animate={inView ? 'enter' : 'hidden'}
    >
      <div className='grid grid-cols-1 gap-3'>
        <div className='col-span-1 font-plex uppercase font-extrabold lg:text-2xl text-base-light dark:text-base-brand'>
          Student Success Stories
        </div>
        <div className='w-full flex justify-start text-clemson font-plex text-9xl max-h-min'>
          &ldquo;
        </div>
        <div className='text-white dark:text-slate-700 font-light text-xl lg:text-2xl -mt-16'>
          The CMPM program exceeded my expectations regarding packaging machine
          systems, sustainability, and point of purchase strategies, through a
          complete and holistic approach to the different aspects of packaging.
        </div>
        <div className='w-full flex justify-end text-clemson font-plex text-9xl -mt-4 max-h-min'>
          &rdquo;
        </div>
        <div className='flex flex-col md:flex-row md:items-center lg:justify-end -mt-16 text-white dark:text-slate-700 gap-2'>
          <div
            className='w-12 h-12 rounded-full'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/jmechristian/image/upload/v1665754606/rebeca-granados-andrade-profile-image_gpy9rw.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div className='flex flex-col'>
            <div className='font-bold text-base-light dark:text-slate-700'>
              Rebeca Granados Andrade
            </div>
            <div className='text-sm'>
              Experience Centre Manager Smurfit Kappa México
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentSuccess;
