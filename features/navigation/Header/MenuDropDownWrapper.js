import React from 'react';
import { useSelector } from 'react-redux';

const MenuDropDownWrapper = ({ children }) => {
  const { menuItemOpen } = useSelector((state) => state.nav);
  return (
    menuItemOpen && (
      <div className='bg-white mx-auto max-w-5xl min-h-fit rounded-b-xl drop-shadow-md'>
        {children}
      </div>
    )
  );
};

export default MenuDropDownWrapper;
