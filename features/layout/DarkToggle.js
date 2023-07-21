import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDark, setLight } from './layoutSlice';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkToggle = () => {
  // const setLight = () => {
  //   localStorage.theme = 'light';
  // };

  const setBodyLight = () => {
    document.body.classList.remove('dark');
    console.log(document.body.classList);
  };

  const setBodyDark = () => {
    document.body.classList.add('dark');
  };

  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  return (
    <div className={`${darkMode ? 'dark' : ''} fixed z-[120] right-3 top-6`}>
      <div
        className='bg-slate-300 dark:bg-slate-800 rounded-full w-10 h-10 flex justify-center items-center shadow-xl'
        onClick={() => console.log('clicked')}
      >
        {darkMode ? (
          <MoonIcon className='w-6 h-6 stroke-white' />
        ) : (
          <SunIcon className='w-6 h-6 stroke-dark' />
        )}
      </div>
    </div>
  );
};

export default DarkToggle;
