import React from 'react';
import { useDispatch } from 'react-redux';

const DropDownIconBlock = ({ icon, category, value, desc, setFilter }) => {
  const dispatch = useDispatch();

  const backgroundColor = () => {
    switch (category) {
      case 'Materials':
        return 'bg-blue-900';
      case 'MATERIALS':
        return 'bg-blue-900';
      case 'Industry':
        return 'bg-red-800';
      case 'INDUSTRY':
        return 'bg-red-800';
      case 'Design':
        return 'bg-green-800';
      case 'DESIGN':
        return 'bg-green-800';
      case 'FOODANDBEVERAGE':
        return 'bg-cyan-900';
      case 'Food & Beverage':
        return 'bg-cyan-900';
      case 'Supply Chain & Logistics':
        return 'bg-fuchsia-700';
      case 'SUPPLYCHAIN':
        return 'bg-fuchsia-700';
      case 'Business':
        return 'bg-violet-800';
      case 'BUSINESS':
        return 'bg-violet-800';
    }
  };
  return (
    <div
      className='flex flex-col gap-1 cursor-pointer'
      onClick={() => setFilter(category, value)}
    >
      <div className='flex gap-4'>
        <div>
          <div
            className={`w-12 h-12 ${backgroundColor()} flex justify-center items-center rounded-full`}
          >
            <div>{icon}</div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-semibold text-slate-900 leading-none font-greycliff'>
            {category}
          </div>
          <div className='text-slate-600 text-sm'>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDownIconBlock;
