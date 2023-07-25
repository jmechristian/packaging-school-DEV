import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import TextInput from '../components/forms/TextInput';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Page = () => {
  const methods = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    await fetch('/api/send-certificate-start', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        form: 'CMPM',
      }),
    });
    router.push(
      `/continue-certificate-of-mastery-in-packaging-management?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}&phone=${data.phone}`
    );
  };
  return (
    <>
      <Head>
        <title>Packaging School | CMPM Form</title>
        <meta
          property='og:title'
          content='Packaging School | CMPM Form'
          key='title'
        />
      </Head>
      <div className='flex flex-col gap-16 pb-24'>
        <CenteredTextHeader
          headline='Certificate of Mastery in Packaging Management'
          heading='Student Application'
          subhead='Distinguish yourself from your colleagues by acquiring a tangible solution that can be presented to both management and peers. Take your first step below and tell us a little bit about yourself to proceed with your application. You will receive a confirmation email within 1-3 business days of your complete application submission. We are looking forward to getting to know you better and can not wait to share our perspective with you on how packaging is an awesome industry full of opportunity.'
        />
        <div className='px-6 xl:px-0'>
          <FormProvider {...methods}>
            <form
              className='md:grid flex flex-col gap-4 md:grid-cols-2 md:gap-6 lg:gap-12 max-w-4xl mx-auto'
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <TextInput
                name={'firstName'}
                placeholder={'Enter First Name'}
                label={'First Name'}
                required
              />

              <TextInput
                name={'lastName'}
                placeholder={'Enter Last Name'}
                label={'Last Name'}
                required
              />

              <TextInput
                name={'email'}
                placeholder={'Enter Email'}
                label={'Email'}
                required
              />

              <TextInput
                name={'phone'}
                placeholder={'Enter Phone Number'}
                label={'Phone Number'}
              />

              <div className='col-span-2 flex justify-end items-center'>
                <button
                  type='submit'
                  className='bg-clemson  align-end w-fit hover:bg-clemson-dark mt-2 text-white font-semibold items-center rounded-lg px-4 py-3 flex gap-1'
                >
                  Continue Application
                  <div>
                    <ArrowLongRightIcon className='w-6 h-6 stroke-white' />
                  </div>
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default Page;
