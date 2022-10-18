import React from 'react';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { showSearch, showMobileMenu } from './navigationSlice';
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const MobileHeader = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);

  return (
    <>
      <MobileNavigation />
      <header className='w-full absolute top-0 left-0 right-0 block lg:hidden bg-transparent z-40'>
        <section className='h-20 w-full container__inner'>
          <div className='w-full h-full flex justify-between items-center'>
            <div className='w-40'>
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
            <div className='flex gap-3'>
              <MagnifyingGlassIcon
                className='w-6 h-6 stroke-slate-900 stroke-2 dark:stroke-white cursor-pointer'
                onClick={() => dispatch(showSearch())}
              />
              <EllipsisVerticalIcon
                className='w-6 h-6 stroke-slate-900 stroke-2 dark:stroke-white cursor-pointer'
                onClick={() => dispatch(showMobileMenu())}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default MobileHeader;
