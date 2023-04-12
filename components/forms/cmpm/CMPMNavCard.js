import React, { useContext } from 'react';
import { CMPMContext } from './CMPMContextProvider';
import { ShieldExclamationIcon } from '@heroicons/react/24/solid';

const CMPMNavCard = ({ item, itemIndex }) => {
  const { activeIndex, setActiveIndex, errorIndex } = useContext(CMPMContext);
  const updateIndexHandler = () => {
    setActiveIndex(itemIndex);
  };

  return (
    <div
      className={`relative flex items-center justify-between p-8 ${
        activeIndex === itemIndex ? 'bg-base-light' : 'bg-white'
      }`}
      onClick={updateIndexHandler}
    >
      {errorIndex.includes(itemIndex) && (
        <div className='absolute z-10 left-2 bottom-2'>
          <ShieldExclamationIcon className='h-7 w-7 fill-red-500' />
        </div>
      )}
      <div className='flex flex-col gap-2 w-full items-center justify-center'>
        <div
          className={`flex flex-col gap-2 ml-10 mr-10 h-16 w-16 rounded-full justify-center items-center text-center font-greycliff font-medium px-5 ${
            activeIndex === itemIndex
              ? ' bg-clemson shadow-xl'
              : 'bg-slate-400 shadow-sm border border-slate-300'
          }`}
        >
          <div>
            <item.icon className='w-8 h-8 stroke-slate-200' />
          </div>
        </div>
        <div
          className={`font-greycliff font-semibold ${
            activeIndex === itemIndex ? 'text-slate-800' : 'text-slate-400'
          }`}
        >
          {item.label}
        </div>
      </div>
    </div>
  );
};

export default CMPMNavCard;
