import React from 'react';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';
import { useForm } from 'react-hook-form';

const Index = () => {
  const submitForm = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className='relative pb-24'>
      <CenteredTextHeader
        headline='Purchase the Automotive Packaging Certificate'
        subhead='Please fill out the form below to get started on your next great chapter. '
      />
      <section>
        <form
          className='grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-6 p-6 w-full mx-auto max-w-3xl'
          onSubmit={handleSubmit(submitForm)}
        >
          <div className='w-full col-span-1'>
            <label htmlFor='studentFirstName' className='sr-only'>
              Student First Name
            </label>
            <input
              {...register('studentFirstName', { required: true })}
              type='text'
              name='studentFirstName'
              id='studentFirstName'
              className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
              placeholder='Student First Name*'
            />
            {errors.studentFirstName?.type === 'required' && (
              <p role='alert' className='text-red-500 text-sm mt-2'>
                <sup>*</sup>Field Required
              </p>
            )}
          </div>
          <div className='w-full'>
            <label htmlFor='studentLastName' className='sr-only'>
              Last Name
            </label>
            <input
              {...register('studentLastName', { required: true })}
              type='text'
              name='studentLastName'
              id='studentLastName'
              className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
              placeholder='Student Last Name*'
            />
            {errors.studentLastName?.type === 'required' && (
              <p role='alert' className='text-red-500 text-sm mt-2'>
                <sup>*</sup>Field Required
              </p>
            )}
          </div>
          <div className='w-full'>
            <label htmlFor='parentFirstName' className='sr-only'>
              Parent/Guardian Name
            </label>
            <input
              {...register('parentFirstName', { required: true })}
              type='text'
              name='parentFirstName'
              id='parentFirstName'
              className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
              placeholder='Parent/Guardian First Name*'
            />
            {errors.parentFirstName?.type === 'required' && (
              <p role='alert' className='text-red-500 text-sm mt-2'>
                <sup>*</sup>Field Required
              </p>
            )}
          </div>
          <div className='w-full'>
            <label htmlFor='parentLastName' className='sr-only'>
              Parent/Guardian Name
            </label>
            <input
              {...register('parentLastName', { required: true })}
              type='text'
              name='parentLastName'
              id='parentLastName'
              className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
              placeholder='Parent/Guardian Last Name*'
            />
            {errors.parentLastName?.type === 'required' && (
              <p role='alert' className='text-red-500 text-sm mt-2'>
                <sup>*</sup>Field Required
              </p>
            )}
          </div>
          <div className='w-full col-span-1 md:col-span-2'>
            <label htmlFor='email' className='sr-only'>
              Parent/Guardian Name
            </label>
            <input
              {...register('email', { required: true })}
              type='text'
              name='email'
              id='email'
              className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
              placeholder='Email*'
            />
            {errors.email?.type === 'required' && (
              <p role='alert' className='text-red-500 text-sm mt-2'>
                <sup>*</sup>Field Required
              </p>
            )}
          </div>
          <button
            className='col-span-1  md:col-span-2 bg-clemson text-center shadow-md hover:bg-clemson-dark text-lg md:text-xl py-4 px-5 rounded-lg font-bold font-greycliff text-white ring-1 ring-white/20 ring-inset'
            type='submit'
          >
            Submit Your Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default Index;
