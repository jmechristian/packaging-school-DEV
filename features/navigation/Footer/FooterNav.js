import React from 'react';

const FooterNav = () => {
  return (
    <div className='flex flex-col gap-1 lg:gap-2 text-sm w-full'>
      <div className='font-extrabold text-sm uppercase tracking-widest text-slate-200'>
        Company
      </div>
      <div className='grid grid-cols-2 gap-y-1 gap-x-8 lg:gap-x-4 justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 w-fit'>About Us</p>
          <p className='text-slate-500 w-fit'>Team Learning</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 w-fit'>Campus Store</p>
          <p className='text-slate-500 w-fit'>Collaborate</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
