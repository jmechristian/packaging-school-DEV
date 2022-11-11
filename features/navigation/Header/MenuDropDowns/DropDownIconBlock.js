import React from 'react';

const DropDownIconBlock = ({ icon, category, desc }) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex gap-4'>
        <div>
          <div className='w-10 h-10 bg-slate-300 flex justify-center items-center rounded'>
            <div>{icon}</div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-slate-900 leading-none font-plex'>
            {category}
          </div>
          <div className='text-slate-600 text-sm'>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDownIconBlock;
