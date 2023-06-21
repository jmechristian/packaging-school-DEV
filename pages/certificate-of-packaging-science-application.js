import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import TextInput from '../components/forms/TextInput';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
const Page = () => {
  const methods = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    router.push(
      `/continue-certificate-of-packaging-science?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}&phone=${data.phone}`
    );
  };
  return (
    <div className='flex flex-col gap-16 pb-24'>
      <CenteredTextHeader
        headline='Certificate Application'
        heading='Certificate Of Packaging Science'
        subhead='Empower yourself with the essential tools for success in the packaging profession, providing 24/7 access to review relevant content on-demand. Set your employees up for success, supporting their career advancement, and utilize this program for effective onboarding and retention strategies.'
      />
      <div className='px-6 xl:px-0'>
        <FormProvider {...methods}>
          <form
            className='grid lg:grid-cols-2 gap-6'
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div>
              <TextInput
                name={'firstName'}
                placeholder={'Enter First Name'}
                label={'First Name'}
                required
              />
            </div>
            <div>
              <TextInput
                name={'lastName'}
                placeholder={'Enter Last Name'}
                label={'Last Name'}
                required
              />
            </div>
            <div>
              <TextInput
                name={'email'}
                placeholder={'Enter Email'}
                label={'Email'}
                required
              />
            </div>
            <div>
              <TextInput
                name={'phoneNumber'}
                placeholder={'Enter Phone Number'}
                label={'Phone Number'}
              />
            </div>
            <button
              type='submit'
              className='bg-clemson hover:bg-clemson-dark mt-2 text-white font-semibold items-center rounded-lg px-4 py-3 flex gap-1'
            >
              Continue Application
              <div>
                <ArrowLongRightIcon className='w-6 h-6 stroke-white' />
              </div>
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;
