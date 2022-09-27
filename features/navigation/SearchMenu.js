import React, { useState } from 'react';
import { XMarkIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { closeSearch } from '../../store/navigation/navigationSlice';
import Image from 'next/image';

const SearchMenu = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchText('');
    dispatch(closeSearch());
  };

  return (
    <section className='w-full h-screen fixed z-50 bg-base-dark top-0 left-0'>
      <div className='w-full h-full px-8 py-16 flex flex-col'>
        <div className='w-1/2 mb-4'>
          <Image
            src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
            alt='Packaging School'
            layout='responsive'
            width={290.75}
            height={83}
          />
        </div>
        <div className='font-bold font-headline text-4xl text-white mb-12'>
          What do you want to learn today?
        </div>
        <div className='relative'>
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
        </div>
      </div>
      <XMarkIcon className='w-7 h-7 stroke-zinc-900 absolute right-2 top-2' />
    </section>
  );
};

export default SearchMenu;
