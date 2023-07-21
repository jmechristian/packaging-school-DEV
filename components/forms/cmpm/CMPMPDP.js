import React, { useState } from 'react';
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

  const [isFirstName, setIsFirstName] = useState('');
  const [isLastName, setIsLastName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isMessage, setIsMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    await fetch('http://localhost:3000/api/send-pdp-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    setIsLoading(false);
    setIsSubmitted(true);
    setIsFirstName('');
    setIsLastName('');
    setIsEmail('');
    setIsPhone('');
    setIsMessage('');
  };

  return (
    <div
      className='bg-gradient-to-tr from-clemson-dark via-base-dark to-base-brand scroll-mt-24'
      id='interest'
    >
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 grid lg:grid-cols-2 lg:gap-24 gap-16'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-3xl font-bold font-greycliff tracking-tight text-white sm:text-4xl'>
            {headline}
          </h2>
          <div className='font-medium text-xl tracking-wide max-w-3xl text-white'>
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
                  onClick={(e) => setIsFirstName(e.target.value)}
                  defaultValue={isFirstName}
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
                  onClick={(e) => setIsLastName(e.target.value)}
                  defaultValue={isLastName}
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
                  onClick={(e) => setIsEmail(e.target.value)}
                  defaultValue={isEmail}
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
                  onClick={(e) => setIsPhone(e.target.value)}
                  defaultValue={isPhone}
                />
                {errors.phone && (
                  <span className='text-red-300'>This field is required</span>
                )}
              </div>
            </div>
            <div className='grid'>
              <div className='flex flex-col gap-2'>
                <textarea
                  name='Message'
                  id='message'
                  placeholder='What would you like to study?'
                  {...register('message', { required: true })}
                  rows={4}
                  className='block w-full rounded-md border-0 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
                  onClick={(e) => setIsMessage(e.target.value)}
                  defaultValue={isMessage}
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
                {isLoading ? 'Sending....' : 'Submit Interest'}
              </button>
            </div>
          </form>
          <div className='w-full text-center mt-6 text-lg'>
            {isSubmitted && (
              <span className='text-white w-full text-center'>Sent!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMPMPDP;
