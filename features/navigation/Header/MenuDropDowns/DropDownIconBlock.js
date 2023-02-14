import React from 'react';
import { useDispatch } from 'react-redux';

const DropDownIconBlock = ({ icon, category, value, desc, setFilter }) => {
  const dispatch = useDispatch();
  return (
    <div
      className='flex flex-col gap-1 cursor-pointer'
      onClick={() => setFilter(category, value)}
    >
      <div className='flex gap-4'>
        <div>
          <div className='w-10 h-10 bg-slate-300 flex justify-center items-center rounded'>
            <div>{icon}</div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-slate-900 leading-none font-greycliff'>
            {category}
          </div>
          <div className='text-slate-600 text-sm'>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDownIconBlock;
