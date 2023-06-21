import React from 'react';
import CPSPersonalInfo from './CPSPersonalInfo';
import CPSProfessionalInfo from './CPSProfessionalInfo';
import CPSGoals from './CPSGoals';
import CPSApply from './CPSApply';

const CPSForm = () => {
  return (
    <form className='w-full bg-slate-200 p-6 divide-y space-y-6 divide-slate-300'>
      <div id='personal' className='flex flex-col gap-6 py-6 scroll-mt-36'>
        <div className='text-xl font-greycliff font-semibold'>
          Personal Information
        </div>
        <CPSPersonalInfo />
      </div>
      <div id='professional' className='py-6 scroll-mt-36 flex flex-col gap-6'>
        <div className='text-xl font-greycliff font-semibold'>
          Professional Information
        </div>
        <CPSProfessionalInfo />
      </div>
      <div id='goals' className='py-6 scroll-mt-36 flex flex-col gap-6'>
        <div className='text-xl font-greycliff font-semibold'>
          Professional Goals
        </div>
        <CPSGoals />
      </div>
      <div id='session' className='py-6 scroll-mt-36 flex flex-col gap-6'>
        <div className='text-xl font-greycliff font-semibold'>Session Info</div>
        <CPSApply />
      </div>
    </form>
  );
};

export default CPSForm;
