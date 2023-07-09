import React from 'react';
import { useForm } from 'react-hook-form';

const CMPMPDP = ({
  headline,
  subheadline,
  buttonText,
  secondaryButtonText,
  buttonLink,
  secondaryButtonLink,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className='bg-gradient-to-tr from-clemson-dark via-base-dark to-base-brand scroll-mt-24'
      id='interest'
    >
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 grid lg:grid-cols-2 lg:gap-24 gap-16'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-3xl font-bold font-greycliff tracking-tight text-white sm:text-5xl'>
            {headline}
          </h2>
          <div className='font-medium text-2xl tracking-wide leading-tight max-w-3xl text-white'>
            {subheadline}
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6'
          >
            <div className='grid md:grid-cols-2 gap-6 lg:gap-12'>
              <div className='flex flex-col gap-2'>
                <input
                  name='firstName'
                  id='firstName'
                  placeholder='First Name'
                  {...register('firstName', { required: true })}
                  className='block w-full rounded-md border-0 px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
                />
                {errors.firstName && (
                  <span className='text-red-300'>This field is required</span>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <input
                  name='lastName'
                  id='lastName'
                  placeholder='Last Name'
                  {...register('lastName', { required: true })}
                  className='block w-full rounded-md border-0 px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
                />
                {errors.lastName && (
                  <span className='text-red-300'>This field is required</span>
                )}
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 lg:gap-12'>
              <div className='flex flex-col gap-2'>
                <input
                  name='Email'
                  id='email'
                  placeholder='Email'
                  {...register('email', { required: true })}
                  className='block w-full rounded-md border-0 px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
                />
                {errors.email && (
                  <span className='text-red-300'>This field is required</span>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <input
                  name='Phone'
                  id='phone'
                  placeholder='Phone'
                  {...register('phone', { required: true })}
                  className='block w-full rounded-md border-0 px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
                />
                {errors.phone && (
                  <span className='text-red-300'>This field is required</span>
                )}
              </div>
            </div>
            <div className='grid'>
              <div className='flex flex-col gap-2'>
                <textarea
                  name='Interest'
                  id='interest'
                  placeholder='What would you like to study?'
                  {...register('interest', { required: true })}
                  rows={4}
                  className='block w-full rounded-md border-0 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
                />
                {errors.interest && (
                  <span className='text-red-300'>This field is required</span>
                )}
              </div>
            </div>
            <div className='grid'>
              <button
                type='submit'
                className='bg-clemson cursor-pointer hover:bg-clemson-dark w-full py-3 text-center rounded-lg text-white font-semibold text-xl'
              >
                Submit Interest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CMPMPDP;
