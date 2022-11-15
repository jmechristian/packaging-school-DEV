import React, { useState } from 'react';
import RotatingCaret from '../../../components/RotatingCaret';

const MobileMenuItemWrapper = ({ component, title, dropdown }) => {
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  return (
    <div className='border-b border-b-slate-400/50 py-4 md:py-6'>
      <div className='flex flex-col gap-6'>
        <div
          className='flex justify-between px-6 md:px-9'
          onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
        >
          <div className='font-bold text-xl md:text-3xl'>{title}</div>
          {dropdown && (
            <RotatingCaret
              styling='h-6 w-6 fill-slate-900'
              open={isMobileDropdownOpen}
            />
          )}
        </div>
        {component}
      </div>
    </div>
  );
};

export default MobileMenuItemWrapper;
