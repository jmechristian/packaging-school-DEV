import React from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const CPSProfessionalInfo = () => {
  return (
    <div className='flex flex-col gap-6'>
      <TextInput
        name={'companyName'}
        placeholder={'Enter Company Name'}
        label={'Company Name'}
        required
      />
      <TextInput
        name={'companyTitle'}
        placeholder={'Enter Company Title'}
        label={'Company Title'}
        required
      />
      <TextInput
        name={'linkedIn'}
        placeholder={'https://'}
        label={'LinkedIn Profile'}
      />
      <TextArea name={'background'} label={'Your Background'} required />
      <TextArea
        name={'whyPackaging'}
        label={'Why did you get into packaging?'}
        required
      />
      <TextArea
        name={'areaOfInterest'}
        label={'What is your main area of interest?'}
        required
      />
    </div>
  );
};

export default CPSProfessionalInfo;
