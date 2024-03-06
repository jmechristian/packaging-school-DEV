import React from 'react';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';
import { useForm } from 'react-hook-form';
import Meta from '../../components/shared/Meta';

const notificationMethods = [
  { id: 'sponsor', title: 'Industry Sponsor' },
  { id: 'expert', title: 'Subject-matter Expert' },
];

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
        title={'Food Packaging Certificate Sponsor Form'}
        description={
          'Help make your mark on the Food Packaging industry by donating your support to the ongoing development of the certificate.'
        }
      />
      <div className='relative pb-24'>
        <CenteredTextHeader
          headline='Food Packaging Certificate Sponsor/SME Interest Form'
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
            <div className='w-full'>
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
              <label htmlFor='phone' className='sr-only'>
                Phone
              </label>
              <input
                {...register('phone')}
                type='text'
                name='phone'
                id='phone'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Phone'
              />
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
              <label htmlFor='companySize' className='sr-only'>
                Company Size
              </label>
              <input
                {...register('companySize')}
                type='text'
                name='companySize'
                id='companySize'
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Company Size'
              />
            </div>
            <div className='col-span-1 md:col-span-2 my-4 w-full border border-slate-400 p-4'>
              <label className='text-base font-semibold text-gray-900 w-full'>
                Interested in Becoming?
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>Interested In</legend>
                <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
                  {notificationMethods.map((notificationMethod) => (
                    <div
                      key={notificationMethod.id}
                      className='flex items-center'
                    >
                      <input
                        {...register(`${notificationMethod.id}`)}
                        id={notificationMethod.id}
                        name={notificationMethod.id}
                        type='radio'
                        className='h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600'
                      />
                      <label
                        htmlFor={notificationMethod.id}
                        className='ml-3 block text-sm font-medium leading-6 text-gray-900'
                      >
                        {notificationMethod.title}
                      </label>
                    </div>
                  ))}
                  {errors.email?.type === 'required' && (
                    <p role='alert' className='text-red-500 text-sm mt-2'>
                      <sup>*</sup>Field Required
                    </p>
                  )}
                </div>
              </fieldset>
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
                placeholder='Topic of Interest*'
              />
              {errors.area?.type === 'required' && (
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
    </>
  );
};

export default Index;
