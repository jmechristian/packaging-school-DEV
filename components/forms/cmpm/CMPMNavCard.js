import React, { useState } from 'react';

const CMPMNavCard = ({ item, itemIndex }) => {
  const [active, setIsActive] = useState(false);

  return (
    <div
      className='relative flex items-center justify-between'
      onClick={() => setIsActive(!active)}
    >
      <div
        className={`flex flex-col gap-2 ml-9 mr-9 h-28 w-32 rounded-lg justify-center items-center text-center font-greycliff font-medium px-5 ${
          active
            ? ' bg-base-brand shadow-xl'
            : 'bg-slate-400 shadow-sm border border-slate-300'
        }`}
      >
        <div>
          <item.icon className='w-6 h-6 stroke-slate-200' />
        </div>
        <div className='leading-tight text-slate-200'>{item.label}</div>
      </div>
      <div className='flex items-center absolute inset-0 -z-10'>
        <div
          className={`w-full h-2 ${active ? 'bg-green-600' : 'bg-slate-200'}`}
        ></div>
      </div>
    </div>
  );
};

export default CMPMNavCard;
