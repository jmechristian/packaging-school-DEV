import React from 'react';
import { useRouter } from 'next/router';

const SalesBarItem = ({ link, icon, text, zIdx }) => {
  const router = useRouter();
  return (
    <div
      className='flex items-center gap-2 lg:gap-1'
      onClick={() => router.push(link)}
    >
      <div className='w-5 h-5'>{icon}</div>
      <div className='text-white text-sm lg:text-base leading-tight'>
        {text}
      </div>
    </div>
  );
};

export default SalesBarItem;
