import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDark, setLight } from './layoutSlice';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  return (
    <div className={`${darkMode ? 'dark' : ''} fixed z-[120] right-3 top-6`}>
      <div
        className='bg-slate-300 dark:bg-slate-800 rounded-full w-12 h-12 flex justify-center items-center shadow-xl'
        onClick={() => {
          darkMode ? dispatch(setLight()) : dispatch(setDark());
        }}
      >
        {darkMode ? (
          <MoonIcon className='w-7 h-7 stroke-white' />
        ) : (
          <SunIcon className='w-7 h-7 stroke-dark' />
        )}
      </div>
    </div>
  );
};

export default DarkToggle;
