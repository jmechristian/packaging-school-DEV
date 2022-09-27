import React, { useState } from 'react';
import { XMarkIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const SearchMenu = () => {
  const [searchText, setSearchText] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchText('');
  };
  return (
    <section className='w-full h-screen fixed z-50 bg-white top-0 left-0'>
      <div className='w-full h-full px-8 py-12 flex flex-col gap-8'>
        <div className='w-2/3'>
          <Image
            src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664298048/pschool/logo_blue_yuapvl.svg'
            alt='Packaging School'
            layout='responsive'
            width={290.75}
            height={83}
          />
        </div>
        <div className='font-bold font-headline text-4xl'>
          What do you want to learn today?
        </div>
        <div className='flex relative'>
          <input
            type='text'
            placeholder='Enter your topic'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          />
          <div>
            <button onClick={searchHandler}>
              <ArrowRightCircleIcon className='h-6 w-6 stroke-zinc-900 absolute right-0 top-2' />
            </button>
          </div>
        </div>
      </div>
      <XMarkIcon className='w-7 h-7 stroke-zinc-900 absolute right-2 top-2' />
    </section>
  );
};

export default SearchMenu;
