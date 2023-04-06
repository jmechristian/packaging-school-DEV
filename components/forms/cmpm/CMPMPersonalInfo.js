import React from 'react';
import TextInput from '../TextInput';

const CMPMPersonalInfo = () => {
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
      <div className='grid grid-cols-2 gap-8'>
        <TextInput
          name={'email'}
          placeholder={'you@email.com'}
          label={'Email'}
          type={'email'}
          required
        />
        <TextInput
          name={'phone'}
          placeholder={''}
          label={'Phone'}
          required
          type='tel'
        />
      </div>
      <TextInput
        name={'streetAddress'}
        placeholder={''}
        label={'Street Address'}
        required
      />
      <TextInput
        name={'streetAddressExtra'}
        placeholder={''}
        label={'Address Line 2'}
      />
      <div className='grid grid-cols-2 gap-8'>
        <TextInput name={'city'} placeholder={''} label={'City'} required />
        <TextInput
          name={'state'}
          placeholder={''}
          label={'State / Province / Region'}
          required
        />
      </div>
      <div className='grid grid-cols-2 gap-8'>
        <TextInput
          name={'country'}
          placeholder={''}
          label={'Country'}
          required
        />
        <TextInput
          name={'birthYear'}
          placeholder={'YYYY'}
          label={'Year of Birth'}
          required
        />
      </div>
    </div>
  );
};

export default CMPMPersonalInfo;
