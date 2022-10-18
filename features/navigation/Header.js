import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSearch } from '../navigation/navigationSlice';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);

  return (
    <header className='w-full hidden lg:flex justify-center absolute top-0 left-0 bg-transparent'>
      <div className='w-full max-w-7xl h-28 text-slate-900 dark:text-white flex justify-between items-center container__inner'>
        <div className='flex items-center'>
          <div className='w-48 mr-6'>
            {darkMode ? (
              <Image
                src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
                alt='Packaging School'
                layout='responsive'
                width={1163}
                height={267}
              />
            ) : (
              <Image
                src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_dark_craqzu.svg'
                alt='Packaging School'
                layout='responsive'
                width={1163}
                height={267}
              />
            )}
          </div>
          <div className='flex gap-6 text-sm font-medium xl:text-base cursor-pointer'>
            <div>About</div>
            <div>Certifications</div>
            <div>Courses</div>
            <div>For Teams</div>
            <div>Library</div>
            <div>Campus Store</div>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <MagnifyingGlassIcon
            className='w-6 h-6 stroke-slate-900 dark:stroke-base-brand cursor-pointer'
            onClick={() => dispatch(showSearch())}
          />
          <UserCircleIcon className='w-6 h-6 stroke-base-brand hidden lg:block xl:hidden' />
          <div className='dark:text-base-light text-slate-900 hidden xl:block text-sm font-medium xl:text-base'>
            Log In
          </div>
          <button className='text-sm font-medium xl:text-base bg-base-brand hover:bg-base-dark rounded hidden xl:block'>
            <div className='px-4 py-2 text-white'>Join for Free</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
