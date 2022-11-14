import React from 'react';
import RotatingCaret from '../../../components/RotatingCaret';

const MobileMenuItemWrapper = ({ component, title, dropdown }) => {
  return (
    <div className='border-b border-b-slate-400/50 py-4 md:py-6'>
      <div className='flex justify-between'>
        <div className='font-bold text-xl md:text-3xl'>{title}</div>
        {dropdown && <RotatingCaret styling='h-6 w-6 fill-slate-900' />}
      </div>
    </div>
  );
};

export default MobileMenuItemWrapper;
