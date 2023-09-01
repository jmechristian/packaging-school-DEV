import React, { useState } from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import TextInput from '../components/forms/TextInput';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { createAppStart } from '../src/graphql/mutations';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    setIsLoading(true);
    await API.graphql({
      query: createAppStart,
      variables: {
        input: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          source: 'CPS',
          sourceUrl: router && router.asPath,
        },
      },
    });

    await fetch('/api/send-certificate-start', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        form: 'CPS',
      }),
    });
    setIsLoading(false);
    router.push(
      `/continue-certificate-of-packaging-science?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}&phone=${data.phone}`
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
          headline='Certificate of Packaging Science'
          heading='Student Application'
          subhead='Empower yourself with the essential tools for success in the packaging profession, providing 24/7 access to review relevant content on-demand. Set your employees up for success, supporting their career advancement, and utilize this program for effective onboarding and retention strategies.'
        />
        <div
          className='bg-indigo-100 w-full text-center max-w-xs md:max-w-2xl mx-auto rounded-lg py-4 mb-6 cursor-pointer'
          onClick={() =>
            window.open(
              'https://calendar.app.google/LQVXpmyZ6vESm5wB6',
              '_blank'
            )
          }
        >
          <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
            <div>
              <CalendarDaysIcon className='w-8 h-8 items-center' />
            </div>
            <div>
              Questions about CPS?{' '}
              <span className='font-bold underline'>
                Schedule a meeting with a counselor.
              </span>
            </div>
          </div>
        </div>
        <div className='px-6 xl:px-0 w-full'>
          <FormProvider {...methods}>
            <form
              className='grid md:grid-cols-2 w-full gap-6 lg:gap-12 max-w-4xl mx-auto'
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className='w-full'>
                <TextInput
                  name={'firstName'}
                  placeholder={'Enter First Name'}
                  label={'First Name'}
                  required
                />
              </div>
              <div className='w-full'>
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
                  name={'phone'}
                  placeholder={'Enter Phone Number'}
                  label={'Phone Number'}
                />
              </div>
              <div className='col-span-2 flex flex-1 justify-end items-center w-full'>
                <button
                  type='submit'
                  className='bg-clemson md:align-end w-full md:w-fit hover:bg-clemson-dark mt-2 text-white font-semibold items-center rounded-lg px-4 py-3 flex justify-center gap-1'
                >
                  {isLoading ? 'Preparing...' : 'Continue Application'}
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
