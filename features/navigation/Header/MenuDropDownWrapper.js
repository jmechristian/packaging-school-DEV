import React from 'react';

const MenuDropDownWrapper = ({ children }) => {
  return (
    <div className='bg-white w-full max-w-5xl min-h-fit rounded-b-xl drop-shadow-md fixed z-50 top-24 left-1/2 -ml-[512px]'>
      {children}
    </div>
  );
};

export default MenuDropDownWrapper;
