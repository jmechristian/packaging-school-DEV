import React from 'react';
import { useForm } from 'react-hook-form';

const FormWrapper = ({ children, submit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className='flex max-w-4xl mx-auto justify-center w-full'>
      <form
        className='flex flex-col gap-6 p-6 w-full'
        onSubmit={handleSubmit(submit)}
      >
        {children}
        {/* <div>
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
        <div>
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
        <div>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <input
            {...register('email', { required: true })}
            type='email'
            name='email'
            id='email'
            className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
            placeholder='you@email.com*'
          />
          {errors.email?.type === 'required' && (
            <p role='alert' className='text-red-500 text-sm mt-2'>
              <sup>*</sup>Field Required
            </p>
          )}
        </div>
        <div>
          <label htmlFor='message' className='sr-only'>
            Message
          </label>
          <textarea
            {...register('message', { required: true })}
            aria-invalid={errors.message ? 'true' : 'false'}
            name='message'
            id='message'
            className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
            placeholder='How Can We Work Together?*'
            rows={3}
          />
          {errors.message?.type === 'required' && (
            <p role='alert' className='text-red-500 text-sm mt-2'>
              <sup>*</sup>Field Required
            </p>
          )}
        </div> */}
        <button
          className='bg-clemson-dark shadow-md hover:bg-clemson-dark text-lg md:text-xl py-4 px-5 rounded-lg font-bold font-greycliff text-white ring-1 ring-white/20 ring-inset'
          type='submit'
        >
          Let&apos;s Talk
        </button>
      </form>
    </div>
  );
};

export default FormWrapper;
