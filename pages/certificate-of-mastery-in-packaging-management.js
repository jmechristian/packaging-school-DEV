import React, { useState } from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import TextInput from '../components/forms/TextInput';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { createAppStart } from '../src/graphql/mutations';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const automateDealHandler = async (
    isEmail,
    isForm,
    isFirstName,
    isLastName,
    isPhone
  ) => {
    // Check For User
    const user = await fetch(`/api/get-ac-user?email=${isEmail}`).then(
      (response) => response.json()
    );
    if (user.data.contacts[0]) {
      //Create Deal
      const deal = await fetch('/api/create-deal', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          formType: isForm,
          contactId: user.data.contacts[0].id,
        }),
      }).then((response) => response.json());

      if (deal.data.deal.id) {
        // Update Deal
        const updated = await fetch(
          `/api/update-deal?dealId=${deal.data.deal.id}&formType=${isForm}`
        ).then((response) => response.json());
      } else {
        console.log('no deal');
      }
    } else {
      const newUser = await fetch('/api/create-ac-user', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: isEmail,
          firstName: isFirstName,
          lastName: isLastName,
          phone: isPhone,
        }),
      }).then((res) => res.json());

      if (newUser.data.contact) {
        //Create Deal
        const deal = await fetch('/api/create-deal', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            formType: isForm,
            contactId: newUser.data.contact.id,
          }),
        }).then((response) => response.json());

        if (deal.data.deal.id) {
          // Update Deal
          const updated = await fetch(
            `/api/update-deal?dealId=${deal.data.deal.id}&formType=${isForm}`
          ).then((response) => response.json());
        } else {
          console.log('no deal');
        }
      }
    }
  };

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
          source: 'CMPM',
          sourceUrl: router && router.asPath,
        },
      },
    });

    await automateDealHandler(
      data.email,
      'CMPM',
      data.firstName,
      data.lastName,
      data.isPhone
    );

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
    setIsLoading(false);
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
        <div
          className='bg-indigo-100 w-full text-center max-w-xs md:max-w-2xl mx-auto rounded-lg py-4 mb-6 cursor-pointer'
          onClick={() =>
            window.open(
              'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ35Hm4GpLbs5oMIYuUcefaOcrSb_F1jFkU_9mCus2H5P9gIObXySikly5zZxVPXuiw-Ou5wZwfg',
              '_blank'
            )
          }
        >
          <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
            <div>
              <CalendarDaysIcon className='w-8 h-8 items-center' />
            </div>
            <div>
              Questions about CMPM?{' '}
              <span className='font-bold underline'>
                Schedule a meeting with a counselor.
              </span>
            </div>
          </div>
        </div>
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
