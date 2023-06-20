import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isErrors, setErrors] = useState(null);
  const router = useRouter();

  const onSubmit = (data) => {
    router.push(
      `/continue-certificate-of-mastery-in-packaging-management?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}&phone=${data.phone}`
    );
  };

  return (
    <div className='pb-24 flex flex-col gap-12'>
      <CenteredTextHeader
        headline='CMPM Application'
        heading='Certificate of Mastery in Packaging Management'
        subhead='Distinguish yourself from your colleagues by acquiring a tangible solution that can be presented to both management and peers. Take your first step below and tell us a little bit about yourself to proceed with your application. You will receive a confirmation email within 1-3 business days of your complete application submission. We are looking forward to getting to know you better and can not wait to share our perspective with you on how packaging is an awesome industry full of opportunity.'
      />
      <div className='max-w-4xl mx-auto px-6 lg:px-0 w-full'>
        <form
          className='w-full flex flex-col gap-6 md:gap-12'
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12'>
            <div className='flex flex-col gap-2'>
              <div className='w-full flex justify-between items-center px-1'>
                <label
                  htmlFor='firstName'
                  className='block font-greycliff font-semibold leading-6 text-slate-700'
                >
                  First Name
                </label>
                <span className='text-sm leading-6 text-red-500'>Required</span>
              </div>
              <input
                type='text'
                {...register('firstName', { required: true })}
                name='firstName'
                id='firstName'
                className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Enter First Name'
                aria-describedby='first name'
              />
              {errors.firstName && (
                <span className='text-sm text-red-500 mt-1'>
                  This field is required
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-full flex justify-between items-center px-1'>
                <label
                  htmlFor='lastName'
                  className='block font-greycliff font-semibold leading-6 text-slate-700'
                >
                  Last Name
                </label>
                <span className='text-sm leading-6 text-red-500'>Required</span>
              </div>
              <input
                type='text'
                {...register('lastName', { required: true })}
                name='lastName'
                id='lastName'
                className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Enter Last Name'
                aria-describedby='last name'
              />
              {errors.lastName && (
                <span className='text-sm text-red-500 mt-1'>
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12'>
            <div className='flex flex-col gap-2'>
              <div className='w-full flex justify-between items-center px-1'>
                <label
                  htmlFor='email'
                  className='block font-greycliff font-semibold leading-6 text-slate-700'
                >
                  Email
                </label>
                <span className='text-sm leading-6 text-red-500'>Required</span>
              </div>
              <input
                type='text'
                {...register('email', { required: true })}
                name='email'
                id='email'
                className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Enter Email'
                aria-describedby='email'
                defaultValue={router.query.email ? router.query.email : ''}
              />
              {errors.email && (
                <span className='text-sm text-red-500 mt-1'>
                  This field is required
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-full flex justify-between items-center px-1'>
                <label
                  htmlFor='phone'
                  className='block font-greycliff font-semibold leading-6 text-slate-700'
                >
                  Phone
                </label>
                {/* <span className='text-sm leading-6 text-red-500'>Required</span> */}
              </div>
              <input
                type='text'
                {...register('phone', { required: false })}
                name='phone'
                id='phone'
                className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Enter Phone'
                aria-describedby='phone'
              />
            </div>
          </div>
          <div className='w-full flex justify-center md:justify-end items-center gap-6'>
            <div>
              {isErrors && (
                <span className='text-red-600 text-sm'>
                  *Please complete all required fields
                </span>
              )}
            </div>
            <button
              type='submit'
              className='bg-clemson hover:bg-clemson-dark text-white font-semibold items-center rounded-lg px-4 py-3 flex gap-1'
            >
              Continue Application
              <div>
                <ArrowLongRightIcon className='w-6 h-6 stroke-white' />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
