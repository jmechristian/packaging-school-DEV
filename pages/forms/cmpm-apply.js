import React, { useMemo, useState } from 'react';
import FormWrapper from '../../components/forms/FormWrapper';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';
import CMPMFormNav from '../../components/forms/cmpm/CMPMFormNav';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import CMPMPersonalInfo from '../../components/forms/cmpm/CMPMPersonalInfo';
import CMPMProfessionalInfo from '../../components/forms/cmpm/CMPMProfessionalInfo';

const Index = () => {
  const [theActiveIndex, setTheActiveIndex] = useState(0);

  const setIndexFromChild = (active) => {
    setTheActiveIndex(active);
    console.log(theActiveIndex);
  };

  const formStateToDisplay = useMemo((theActiveIndex) => {
    switch (theActiveIndex) {
      case '0':
        return <CMPMPersonalInfo />;
      case '1':
        return <CMPMProfessionalInfo />;
      case '2':
        return;
      default:
        return <CMPMPersonalInfo />;
    }
  }, []);

  return (
    <div className='flex flex-col pt-4 pb-24 gap-6'>
      <CenteredTextHeader
        headline='Student Application'
        heading='Certificate of Mastery in Packaging Management'
        subhead='Thank you for your interest in the Certificate of Mastery in Packaging Management (CMPM) offered through Clemson University’s Center for Corporate Learning. Below is our application for admission. Our request is that you embrace the application as an opportunity for the Packaging School Education Team to understand your personal and professional goals so that we may ensure the CMPM program is a fit for you.'
      />
      <div className='flex flex-col max-w-4xl w-full mx-auto border border-slate-100 rounded-lg shadow-xl'>
        <CMPMFormNav setIndex={setIndexFromChild} />
        <FormWrapper>
          {formStateToDisplay}
          <div className='mt-9 flex w-full items-center justify-end gap-x-9 col-span-2'>
            <button
              type='button'
              className='text-lg font-semibold font-greycliff text-gray-900'
            >
              Save
            </button>
            <button
              type='submit'
              className='rounded-md bg-base-brand px-4 py-3 text-lg font-semibold text-white shadow-sm font-greycliff hover:bg-base-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 flex gap-1 items-center'
            >
              <div className='leading-none'>Save and Continue</div>
              <div>
                <ArrowLongRightIcon className='w-5 h-5 stroke-white' />
              </div>
            </button>
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default Index;
