import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { showSearch, showMobileMenu } from './navigationSlice';
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const MobileHeader = () => {
  const dispatch = useDispatch();

  return (
    <header className='w-full relative block lg:hidden bg-dark'>
      <section className='h-20 w-full container__inner'>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='w-44'>
            <Image
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
              alt='Packaging School'
              layout='responsive'
              width={1163}
              height={267}
            />
          </div>
          <div className='flex gap-3'>
            <MagnifyingGlassIcon
              className='w-6 h-6 stroke-base-brand cursor-pointer'
              onClick={() => dispatch(showSearch())}
            />
            <EllipsisVerticalIcon
              className='w-6 h-6 stroke-base-brand cursor-pointer'
              onClick={() => dispatch(showMobileMenu())}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default MobileHeader;
