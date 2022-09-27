import React from 'react';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className='w-full hidden lg:flex justify-center px-4 sm:px-6 md:px-8'>
      <div className='w-full max-w-6xl h-28 text-white flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='w-48 mr-6'>
            <Image
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
              alt='Packaging School'
              layout='responsive'
              width={1163}
              height={267}
            />
          </div>
          <div className='flex gap-6 text-sm xl:text-base'>
            <div>About</div>
            <div>Certifications</div>
            <div>Courses</div>
            <div>For Teams</div>
            <div>Library</div>
            <div>Campus Store</div>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <MagnifyingGlassIcon className='w-6 h-6 stroke-base-brand' />
          <UserCircleIcon className='w-6 h-6 stroke-base-brand hidden lg:block xl:hidden' />
          <div className='text-base-light hidden xl:block text-sm xl:text-base'>
            Log In
          </div>
          <button className='text-sm xl:text-base bg-base-brand hover:bg-base-dark rounded hidden xl:block'>
            <div className='px-4 py-2'>Join for Free</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
