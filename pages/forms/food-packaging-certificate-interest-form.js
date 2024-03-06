import React from 'react';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';
import { useForm } from 'react-hook-form';
import Meta from '../../components/shared/Meta';

const Index = () => {
  const submitForm = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Meta
        title={'Food Packaging Certificate Interest Form'}
        description={
          'Please fill out the form below to get started on your next great chapter.'
        }
      />
      <div className='relative pb-24'>
        <CenteredTextHeader
          headline='Food Packaging Certificate Interest Form'
          subhead='Please fill out the form below to get started on your next great chapter. '
        />
        <section>
          <form
            className='grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-6 p-6 w-full mx-auto max-w-3xl'
            onSubmit={handleSubmit(submitForm)}
          >
            <div className='w-full col-span-1'>
              <label htmlFor='firstName' className='sr-only'>
                First Name
              </label>
              <input
                {...register('firstName', { required: true })}
                type='text'
                name='firstName'
                id='firstName'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='First Name*'
              />
              {errors.firstName?.type === 'required' && (
                <p role='alert' className='text-red-500 text-sm mt-2'>
                  <sup>*</sup>Field Required
                </p>
              )}
            </div>
            <div className='w-full'>
              <label htmlFor='lastName' className='sr-only'>
                Last Name
              </label>
              <input
                {...register('lastName', { required: true })}
                type='text'
                name='lastName'
                id='lastName'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Last Name*'
              />
              {errors.lastName?.type === 'required' && (
                <p role='alert' className='text-red-500 text-sm mt-2'>
                  <sup>*</sup>Field Required
                </p>
              )}
            </div>
            <div className='w-full col-span-1 md:col-span-2'>
              <label htmlFor='email' className='sr-only'>
                Email
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
            <div className='w-full'>
              <label htmlFor='company' className='sr-only'>
                Company
              </label>
              <input
                {...register('company')}
                type='text'
                name='company'
                id='company'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Company'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='title' className='sr-only'>
                Title
              </label>
              <input
                {...register('title', { required: true })}
                type='text'
                name='title'
                id='title'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Title'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='parentLastName' className='sr-only'>
                City
              </label>
              <input
                {...register('city', { required: true })}
                type='text'
                name='city'
                id='city'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='City'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='state' className='sr-only'>
                City
              </label>
              <input
                {...register('state', { required: true })}
                type='text'
                name='state'
                id='state'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='State'
              />
            </div>
            <div className='col-span-1 md:col-span-2'>
              <label htmlFor='area' className='sr-only'>
                City
              </label>
              <textarea
                {...register('area', { required: true })}
                name='area'
                id='area'
                rows={5}
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Is there a particular area in food packaging that you are interested in?'
              />
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
    </>
  );
};

export default Index;
