import React from 'react';
import CenteredTextHeader from '../../components/layout/CenteredTextHeader';
import { useForm } from 'react-hook-form';
import Head from 'next/head';

const notificationMethods = [
  { id: '1', title: '1' },
  { id: '2', title: '2' },
  { id: '3', title: '3' },
  { id: '4', title: '4' },
  { id: '5', title: '5' },
  { id: '6', title: '6' },
  { id: '7', title: '7' },
  { id: '8', title: '8' },
  { id: '9', title: '9' },
  { id: '10', title: '10' },
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
      <Head>
        <title>Packaging School | Client Satisfaction Survey</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div className='relative pb-24'>
        <CenteredTextHeader headline='Client Satisfaction Survey' />
        <section>
          <form
            className='grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-6 p-6 w-full mx-auto max-w-3xl'
            onSubmit={handleSubmit(submitForm)}
          >
            <div className='col-span-1 md:col-span-2 my-4 w-full '>
              <label className='text-base font-semibold text-gray-900 w-full'>
                Rate your experience working with The Packaging School (1 low,
                10 high)<sup>*</sup>
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>
                  Rate your experience working with The Packaging School (1 low,
                  10 high)
                </legend>
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
            <div className='col-span-1 md:col-span-2 my-4 w-full '>
              <label className='text-base font-semibold text-gray-900 w-full'>
                How satisfied are you with the outcome of your project overall?
                <sup>*</sup>
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>
                  Rate your experience working with The Packaging School (1 low,
                  10 high)
                </legend>
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
            <div className='col-span-1 md:col-span-2 my-4 w-full '>
              <label className='text-base font-semibold text-gray-900 w-full'>
                If applicable, how satisfied are you with the learning
                management platform?<sup>*</sup>
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>
                  Rate your experience working with The Packaging School (1 low,
                  10 high)
                </legend>
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
            <div className='col-span-1 md:col-span-2 my-4 w-full '>
              <label className='text-base font-semibold text-gray-900 w-full'>
                How satisfied are you with the content of the lessons?
                <sup>*</sup>
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>
                  Rate your experience working with The Packaging School (1 low,
                  10 high)
                </legend>
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
            <div className='col-span-1 md:col-span-2 my-4 w-full '>
              <label className='text-base font-semibold text-gray-900 w-full'>
                How satisfied are you with the presentation of the lessons
                (videos, graphs, interactives)?<sup>*</sup>
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>
                  Rate your experience working with The Packaging School (1 low,
                  10 high)
                </legend>
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
            <div className='col-span-1 md:col-span-2 my-4 w-full '>
              <label className='text-base font-semibold text-gray-900 w-full'>
                How likely is it that you would recommend The Packaging School
                to a friend or colleague?<sup>*</sup>
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>
                  Rate your experience working with The Packaging School (1 low,
                  10 high)
                </legend>
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
              <label htmlFor='comments' className='sr-only'>
                Comments
              </label>
              <textarea
                {...register('comments')}
                name='comments'
                id='comments'
                rows={5}
                className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                placeholder='Are there any other comments you would like to add?'
              />
            </div>
            <button
              className='col-span-1  md:col-span-2 bg-clemson text-center shadow-md hover:bg-clemson-dark text-lg md:text-xl py-4 px-5 rounded-lg font-bold font-greycliff text-white ring-1 ring-white/20 ring-inset'
              type='submit'
            >
              Submit Your Response
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Index;
