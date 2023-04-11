import React from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';

const CMPMProfessionalInfo = ({ activeIndex }) => {
  return (
    <div
      className='grid flex-col gap-6 pt-4'
      style={{ display: activeIndex === 1 ? 'flex' : 'none' }}
    >
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
