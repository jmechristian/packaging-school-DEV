import React from 'react';
import { useRouter } from 'next/router';

const HoverCard = ({ title, subtitle, Icon, href }) => {
  const router = useRouter();

  return (
    <div
      href={href}
      className='w-full p-6 rounded border-[1px] border-neutral-300 dark:border-base-dark relative overflow-hidden group bg-white dark:bg-base-brand'
      onClick={() => router.push(href)}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-base-mid to-base-dark translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300' />

      <Icon className='absolute z-10 -top-9 -right-9 text-9xl text-neutral-100 dark:text-base-mid group-hover:text-brand-yellow group-hover:rotate-12 transition-transform duration-300' />
      <Icon className='mb-2 w-10 h-10 text-2xl text-base-mid dark:text-white group-hover:text-white transition-colors relative z-10 duration-300' />
      <h2 className='font-bold mt-4 lg:mt-0 leading-snug text-xl md:text-2xl text-neutral-950 group-hover:text-brand-yellow relative z-10 duration-200'>
        {title}
      </h2>
      <p className='text-neutral-500 group-hover:text-neutral-100 dark:text-white relative z-10 duration-300 leading-normal mt-1.5'>
        {subtitle}
      </p>
    </div>
  );
};

export default HoverCard;
