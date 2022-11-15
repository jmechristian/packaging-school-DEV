import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { closeMobileMenu } from '../navigationSlice';
import MobileMenuMenu from './MobileMenuMenu';
import AssessmentCTA from '../../../components/AssessmentCTA';
import StickySignup from './StickySignup';

const MobileMenuContent = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='h-full min-h-screen relative'>
        <div className='flex justify-between items-center h-20 md:h-24 bg-slate-900 p-6 md:p-9 sticky z-[60] left-0 right-0 top-0 drop-shadow-md'>
          <div className='w-1/2 md:w-1/4'>
            <Image
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1664295580/pschool/logo_white_krqpbc.svg'
              width='511'
              height='117'
              layout='responsive'
              alt='The Packaging School'
            />
          </div>
          <XMarkIcon
            className='w-7 h-7 stroke-white'
            onClick={() => dispatch(closeMobileMenu())}
          />
        </div>
        <MobileMenuMenu />
        <div className='p-6 md:p-9'>
          <AssessmentCTA />
        </div>
      </div>
      <StickySignup />
    </>
  );
};

export default MobileMenuContent;
