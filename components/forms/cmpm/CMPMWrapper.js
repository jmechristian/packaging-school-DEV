import React, { useMemo, useContext, useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import FormWrapper from '../FormWrapper';
import CenteredTextHeader from '../../layout/CenteredTextHeader';
import CMPMFormNav from './CMPMFormNav';
import CMPMGoals from './CMPMGoals';
import CMPMPersonalInfo from './CMPMPersonalInfo';
import CMPMProfessionalInfo from './CMPMProfessionalInfo';
import CMPMSessionInfo from './CMPMSessionInfo';
import { CMPMContext } from './CMPMContextProvider';

const CMPMWrapper = () => {
  const { activeIndex, setActiveIndex } = useContext(CMPMContext);

  const formSaveHandler = () => {
    setActiveIndex(activeIndex + 1);
  };

  const formStateToDisplay = (activeIndex) => {
    switch (activeIndex) {
      case 0:
        return <CMPMPersonalInfo />;
      case 1:
        return <CMPMProfessionalInfo />;
      case 2:
        return <CMPMGoals />;
      default:
        return <CMPMSessionInfo />;
    }
  };

  return (
    <div className='flex flex-col pt-4 pb-24 gap-6'>
      <CenteredTextHeader
        headline='Student Application'
        heading='Certificate of Mastery in Packaging Management'
        subhead='Thank you for your interest in the Certificate of Mastery in Packaging Management (CMPM) offered through Clemson University’s Center for Corporate Learning. Below is our application for admission. Our request is that you embrace the application as an opportunity for the Packaging School Education Team to understand your personal and professional goals so that we may ensure the CMPM program is a fit for you.'
      />
      <div className='flex flex-col max-w-4xl w-full mx-auto border border-slate-100 rounded-lg shadow-xl'>
        <CMPMFormNav activeIndex={activeIndex} />
        <FormWrapper>
          <CMPMPersonalInfo activeIndex={activeIndex} />
          <CMPMProfessionalInfo activeIndex={activeIndex} />
          <CMPMGoals activeIndex={activeIndex} />
          <CMPMSessionInfo activeIndex={activeIndex} />
          <div className='mt-9 flex w-full items-center justify-end gap-x-9 col-span-2'>
            <button
              type='button'
              className='text-lg font-semibold font-greycliff text-gray-600'
            >
              Save
            </button>
            {activeIndex === 3 ? (
              <button
                type='submit'
                className='rounded-md bg-base-brand px-4 py-3 text-lg font-semibold text-white shadow-sm font-greycliff hover:bg-base-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 flex gap-1 items-center'
              >
                <div className='leading-none'>Submit Application</div>
              </button>
            ) : (
              <div
                className='cursor-pointer rounded-md bg-base-brand px-4 py-3 text-lg font-semibold text-white shadow-sm font-greycliff hover:bg-base-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 flex gap-1 items-center'
                onClick={formSaveHandler}
              >
                <div className='leading-none'>Save and Continue</div>
                <div>
                  <ArrowLongRightIcon className='w-5 h-5 stroke-white' />
                </div>
              </div>
            )}
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default CMPMWrapper;
