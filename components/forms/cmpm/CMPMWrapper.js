import React, { useContext } from 'react';
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
        <FormWrapper
          activeIndex={activeIndex}
          setActiveIndex={(val) => setActiveIndex(val)}
        >
          <CMPMPersonalInfo activeIndex={activeIndex} />
          <CMPMProfessionalInfo activeIndex={activeIndex} />
          <CMPMGoals activeIndex={activeIndex} />
          <CMPMSessionInfo activeIndex={activeIndex} />
        </FormWrapper>
      </div>
    </div>
  );
};

export default CMPMWrapper;
