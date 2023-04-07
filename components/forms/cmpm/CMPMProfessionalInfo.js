import React from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';

const CMPMProfessionalInfo = () => {
  return (
    <div className='flex flex-col gap-4 pt-4'>
      <div className='grid grid-cols-2 gap-8'>
        <TextInput
          name={'companyName'}
          placeholder={''}
          label={'Company Name'}
          required
        />
        <TextInput
          name={'companyTitle'}
          placeholder={''}
          label={'Company Title'}
          required
        />
      </div>
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

export default CMPMProfessionalInfo;
