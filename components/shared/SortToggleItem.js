import React from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const SortToggleItem = ({ sort, value, direction, fn }) => {
  return (
    <div className='flex gap-1 items-center cursor-pointer transition-all ease-in'>
      {value === sort && (
        <div className='flex flex-col'>
          <div>
            <MdExpandLess
              size={20}
              color={direction === 'ASC' ? 'yellow' : 'grey'}
            />
          </div>
          <div>
            <MdExpandMore
              size={20}
              color={direction === 'DSC' ? 'yellow' : 'grey'}
            />
          </div>
        </div>
      )}

      <div
        className={`w-full py-1 capitalize cursor-pointer ${
          value === sort ? 'bg-white/20 pl-1' : ''
        }`}
        onClick={() => fn()}
      >
        {sort}
      </div>
    </div>
  );
};

export default SortToggleItem;
