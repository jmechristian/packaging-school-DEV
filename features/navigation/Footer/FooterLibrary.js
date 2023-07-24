import Link from 'next/link';
import React from 'react';

const FooterLibrary = () => {
  return (
    <div className='flex flex-col gap-1 lg:gap-2 text-sm w-full'>
      <div className='font-extrabold text-sm uppercase tracking-widest text-gray-200 font-greycliff'>
        Library
      </div>
      <div className='grid grid-cols-2 gap-y-1 gap-x-8 lg:gap-x-4 justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-500 dark:text-gray-500 w-fit'>
            <Link href={'/library'}>Lessons</Link>
          </p>
          <p className='text-gray-500 dark:text-gray-500 w-fit'>
            <Link href={'/library'}>Articles</Link>
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-500 dark:text-gray-500 w-fit'>
            <Link href={'/library'}>Free Tools</Link>
          </p>
          <p className='text-gray-500 dark:text-gray-500 w-fit'>
            <Link href={'/library'}>Glossary</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterLibrary;
