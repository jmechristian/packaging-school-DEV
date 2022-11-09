import React from 'react';

const FooterLibrary = () => {
  return (
    <div className='flex flex-col gap-1 lg:gap-2 text-sm w-full'>
      <div className='font-extrabold text-sm uppercase tracking-widest text-slate-200'>
        Library
      </div>
      <div className='grid grid-cols-2 gap-y-1 gap-x-8 lg:gap-x-4 justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 w-fit'>Lessons</p>
          <p className='text-slate-500 w-fit'>Videos</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 w-fit'>Box Lab</p>
          <p className='text-slate-500 w-fit'>Glossary</p>
        </div>
      </div>
    </div>
  );
};

export default FooterLibrary;
