import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearch } from '../../store/navigation/navigationSlice';

const SearchMenu = () => {
  const [searchText, setSearchText] = useState('');
  const { searchOpen } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchText('');
    dispatch(closeSearch());
  };

  const variants = {
    open: {
      clipPath: 'circle(141% at 95% 5%)',
      transition: {
        duration: 0.2,
        staggerChildren: 0.5,
        ease: 'circIn',
      },
    },
    closed: {
      clipPath: 'circle(0% at 95% 5%)',
      transition: {
        ease: 'circIn',
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
    <motion.section
      className='w-full h-screen fixed z-50 bg-base-dark top-0 left-0'
      variants={variants}
      initial={false}
      animate={searchOpen ? 'open' : 'closed'}
    >
      <motion.div className='w-full h-full px-8 md:px-20 pt-20 flex flex-col'>
        <motion.div
          className='font-bold font-headline text-4xl text-white mb-8'
          variants={itemVariants}
        >
          What do you want to <span className='text-clemson'>learn today?</span>
        </motion.div>
        <motion.div className='relative' variants={itemVariants}>
          <form className='w-full'>
            <input
              type='text'
              placeholder='Start Your Search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className='mt-0 block w-full px-3 py-3 border-0 rounded bg-zinc-300 focus:ring-0 focus:border-black'
            />
            <div>
              <button onClick={searchHandler} type='submit'>
                <ArrowRightCircleIcon className='h-6 w-6 stroke-zinc-900 absolute right-2 top-3' />
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
      <XMarkIcon
        className='w-7 h-7 stroke-zinc-900 absolute right-4 top-6'
        onClick={searchHandler}
      />
    </motion.section>
  );
};

export default SearchMenu;
