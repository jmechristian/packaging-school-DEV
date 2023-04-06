import React from 'react';
import TextInput from '../TextInput';

const CMPMProfessionalInfo = () => {
  return (
    <div className='flex flex-col gap-3 pt-4'>
      <div className='grid grid-cols-2 gap-8'>
        <TextInput
          name={'firstName'}
          placeholder={''}
          label={'First Name'}
          required
        />
        <TextInput
          name={'lastName'}
          placeholder={''}
          label={'Last Name'}
          required
        />
      </div>
      <TextInput
        name={'streetAddress'}
        placeholder={''}
        label={'Street Address'}
        required
      />
    </div>
  );
};

export default CMPMProfessionalInfo;
