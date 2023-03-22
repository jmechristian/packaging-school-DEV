import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
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
    <>
      <CenteredTextHeader
        headline='Download Your Package Development Plan'
        subhead='You’ll apply the course content to your own, custom Package Development Plan for your organization or product line. Every student project is unique, and have ranged from pharmaceutical packaging, new consumer products, rebrands and extensions, sustainability initiatives, to protective industrial packaging.'
      />
      <div className='max-w-5xl w-full lg:px-0 mx-auto pb-32'>
        <section>
          <form
            className='grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-6 p-6 w-full mx-auto max-w-3xl'
            onSubmit={handleSubmit(submitForm)}
          >
            <div className='w-full col-span-1 md:col-span-2'>
              <label htmlFor='fullName' className='sr-only'>
                Full Name
              </label>
              <input
                {...register('fullName', { required: true })}
                type='text'
                name='fullName'
                id='fullName'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Full Name*'
              />
              {errors.email?.type === 'required' && (
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
            <div className='w-full col-span-1 md:col-span-2'>
              <label htmlFor='company' className='sr-only'>
                Company
              </label>
              <input
                {...register('company', { required: true })}
                type='text'
                name='company'
                id='company'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Company*'
              />
              {errors.email?.type === 'required' && (
                <p role='alert' className='text-red-500 text-sm mt-2'>
                  <sup>*</sup>Field Required
                </p>
              )}
            </div>
            <div className='w-full col-span-1 md:col-span-2'>
              <label htmlFor='title' className='sr-only'>
                Parent/Guardian Name
              </label>
              <input
                {...register('title', { required: true })}
                type='text'
                name='title'
                id='title'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Title*'
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
              Get Your Development Plan
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Index;
