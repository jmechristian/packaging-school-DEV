import React, { useState } from 'react';
import {
  UserCircleIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const CPSNav = () => {
  const [isSelected, setIsSelected] = useState('personal');

  const items = [
    {
      id: 'personal',
      icon: UserCircleIcon,
      label: 'Personal',
    },
    {
      id: 'professional',
      icon: BuildingOfficeIcon,
      label: 'Professional',
    },
    {
      id: 'goals',
      icon: TrophyIcon,
      label: 'Goals',
    },
    {
      id: 'session',
      icon: AcademicCapIcon,
      label: 'Session',
    },
  ];

  return (
    <div className='w-full grid grid-cols-4 sticky top-0 bg-slate-100 shadow-sm'>
      {items.map((item) => (
        <div
          key={item.id}
          className={`border border-slate-200 w-full py-3 text-center text-sm font-greycliff font-semibold ${
            isSelected === item.id && 'bg-slate-200 text-clemson'
          }`}
          onClick={() => setIsSelected(item.id)}
        >
          <a href={`#${item.id}`}>{item.label}</a>
        </div>
      ))}
      <div className='col-span-4 flex justify-center items-center w-full py-3 bg-clemson font-greycliff font-semibold text-white'>
        Save Form
      </div>
      <div className='col-span-4 flex justify-center items-center w-full py-3 bg-base-mid font-greycliff font-semibold text-white'>
        Submit Form
      </div>
    </div>
  );
};

export default CPSNav;
