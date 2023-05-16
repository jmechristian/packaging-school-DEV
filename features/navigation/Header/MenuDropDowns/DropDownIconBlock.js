import React from 'react';
import { useDispatch } from 'react-redux';

const DropDownIconBlock = ({ icon, category, value, desc, setFilter }) => {
  const dispatch = useDispatch();

  const backgroundColor = () => {
    switch (category) {
      case 'Materials':
        return 'blue-900';
      case 'MATERIALS':
        return 'blue-900';
      case 'Industry':
        return 'red-800';
      case 'INDUSTRY':
        return 'red-800';
      case 'Design':
        return 'green-800';
      case 'DESIGN':
        return 'green-800';
      case 'FOODANDBEVERAGE':
        return 'cyan-900';
      case 'Food & Beverage':
        return 'cyan-900';
      case 'Supply Chain & Logistics':
        return 'fuchsia-700';
      case 'SUPPLYCHAIN':
        return 'fuchsia-700';
      case 'Business':
        return 'violet-800';
      case 'BUSINESS':
        return 'violet-800';
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
            className={`w-10 h-10 bg-${backgroundColor()} flex justify-center items-center rounded`}
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
