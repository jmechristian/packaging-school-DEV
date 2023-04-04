import React from 'react';
import TextInput from '../../components/forms/TextInput';
import FormWrapper from '../../components/forms/FormWrapper';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';

const Index = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex flex-col gap-12 pt-12 pb-24'>
      <CenteredTextHeader
        headline='Student Application'
        heading='Certificate of Mastery in Packaging Management'
        subhead='Thank you for your interest in the Certificate of Mastery in Packaging Management (CMPM) offered through Clemson University’s Center for Corporate Learning. Below is our application for admission. Our request is that you embrace the application as an opportunity for the Packaging School Education Team to understand your personal and professional goals so that we may ensure the CMPM program is a fit for you.'
      />
      <FormWrapper>
        <div className='grid grid-cols-2 gap-16'>
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
        <div className='grid grid-cols-2 gap-16'>
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
        <div className='grid grid-cols-2 gap-16'>
          <TextInput name={'city'} placeholder={''} label={'City'} required />
          <TextInput
            name={'state'}
            placeholder={''}
            label={'State / Province / Region'}
            required
          />
        </div>
        <div className='grid grid-cols-2 gap-16'>
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
        <div className='mt-6 flex w-full items-center justify-end gap-x-6 col-span-2'>
          <button
            type='submit'
            className='rounded-md bg-clemson px-4 py-3 text-lg font-semibold text-white shadow-sm font-greycliff hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
          >
            Submit Application
          </button>
        </div>
      </FormWrapper>
    </div>
  );
};

export default Index;
