import React from 'react';
import FormWrapper from '../../components/forms/FormWrapper';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';

const Index = () => {
  const submitForm = (data) => console.log(data);

  return (
    <div className='relative pb-24'>
      <CenteredTextHeader
        headline='Purchase the Automotive Packaging Certificate'
        subhead='Please fill out the form below to get started on your next great chapter. '
      />
      <FormWrapper></FormWrapper>
    </div>
  );
};

export default Index;
