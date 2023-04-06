import React, { useState } from 'react';
import {
  UserCircleIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import CMPMNavCard from './CMPMNavCard';

const CMPMFormNav = ({ setIndex }) => {
  const items = [
    {
      id: 'personal',
      icon: UserCircleIcon,
      label: 'Personal',
    },
    {
      id: 'company',
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

  const [activeIndex, setActiveIndex] = useState(0);

  const setActiveChild = (childIndex) => {
    setIndex(childIndex);
    setActiveIndex(childIndex);
  };

  return (
    <div className='w-full grid grid-cols-4'>
      {items.map((item, index) => (
        <div
          key={item.id}
          className='first:rounded-tl-lg last:rounded-tr-lg border border-slate-100'
        >
          <CMPMNavCard
            item={item}
            setActive={setActiveChild}
            activeIndex={activeIndex}
            itemIndex={index}
          />
        </div>
      ))}
    </div>
  );
};

export default CMPMFormNav;
