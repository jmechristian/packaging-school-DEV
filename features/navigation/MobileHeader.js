import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import SearchMenu from './SearchMenu';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const MobileHeader = () => {
  const dispatch = useDispatch();
  const { searchOpen } = useSelector((state) => state.nav);
  return (
    <header className='w-full relative'>
      <section className='h-16 w-full border-b'>
        <div className='w-full h-full flex justify-between items-center px-4'>
          <Bars3BottomLeftIcon className='w-7 h-7 stroke-zinc-900' />
          <div className='w-36'>
            <Image
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664298048/pschool/logo_blue_yuapvl.svg'
              alt='Packaging School'
              layout='responsive'
              width={1163}
              height={267}
            />
          </div>
          <MagnifyingGlassIcon className='w-6 h-6 stroke-zinc-900' />
        </div>
      </section>
      <SearchMenu />
    </header>
  );
};

export default MobileHeader;
