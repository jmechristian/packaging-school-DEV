import React from 'react';
import { useDispatch } from 'react-redux';
import { setTextColor } from '../../../../helpers/utils';

const DropDownIconBlock = ({
  icon,
  category,
  value,
  desc,
  setFilter,
  callout,
}) => {
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
      className='flex justify-between items-center gap-1 cursor-pointer border rounded-xl p-1.5 bg-white dark:bg-dark-mid dark:hover:bg-neutral-700 hover:shadow-lg transition-all ease-in pb-2'
      onClick={() => setFilter(category, value)}
    >
      <div className='flex gap-2'>
        <div>
          <div
            className={`w-10 h-10 ${setTextColor(
              category
            )} flex justify-center items-center rounded-full`}
          >
            <div>{icon}</div>
          </div>
        </div>
        <div className='flex flex-col gap-1 justify-center'>
          <div className='font-semibold text-slate-900 dark:text-white leading-none font-greycliff'>
            {category}
          </div>
          {/* <div className='text-slate-800 dark:text-gray-400 text-sm leading-snug'>
            {desc}
          </div> */}
        </div>
      </div>
      {callout && (
        <div className='w-fit text-xs font-semibold text-white bg-brand-red px-2 rounded-lg py-1'>
          {callout}
        </div>
      )}
    </div>
  );
};

export default DropDownIconBlock;
