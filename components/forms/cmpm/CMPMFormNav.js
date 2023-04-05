import React, { useState } from 'react';
import {
  UserCircleIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

import { FlagIcon } from '@heroicons/react/24/solid';
import CMPMNavCard from './CMPMNavCard';

const CMPMFormNav = () => {
  const items = [
    {
      id: 'personal',
      icon: UserCircleIcon,
      label: 'Personal Information',
    },
    {
      id: 'company',
      icon: BuildingOfficeIcon,
      label: 'Professional Information',
    },
    {
      id: 'goals',
      icon: TrophyIcon,
      label: 'Academic Goals',
    },
    {
      id: 'session',
      icon: AcademicCapIcon,
      label: 'Session Information',
    },
  ];

  return (
    <div className='w-full max-w-4xl mx-auto flex justify-center items-center'>
      <div className='w-8 h-8 bg-green-600 rounded-full' />
      {items.map((item, index) => (
        <div key={item.id}>
          <CMPMNavCard item={item} itemIndex={index} />
        </div>
      ))}
      <div className='w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center'>
        <div>
          <FlagIcon className='w-5 h-5 fill-white' />
        </div>
      </div>
    </div>
  );
};

export default CMPMFormNav;
