import React from 'react';
import {
  PencilSquareIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const BMWCard = ({ title, icon, content }) => {
  return (
    <div className='border  border-gray-200 rounded-lg p-4 shadow-lg h-full'>
      <div className='bg-base-light rounded-t-lg w-full'>
        <div className='w-full h-full flex flex-col justify-between p-6'>
          <div className='flex justify-between items-center w-full'>
            <div className='text-2xl pr-4 tracking-tighter font-bold text-gray-800'>
              {title}
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
              {icon}
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 py-6 border rounded-b-lg text-gray-600 text-center text-sm'>
        {content}
      </div>
    </div>
  );
};

export default BMWCard;
