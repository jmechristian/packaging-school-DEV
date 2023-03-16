import React from 'react';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import { useForm } from 'react-hook-form';

const PartnerBottom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='relative overflow-hidden bg-white px-6 sm:py-16 mb-8 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-base-brand font-greycliff'>
                Get In Touch
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-greycliff'>
                Better Together.
              </h1>
              <p className='mt-6 text-xl leading-8 text-slate-700'>
                Is there something on this page that intrigues you? Do you want
                to be contacted by one of our Packaging School educational
                specialists? Please fill out the form, and we&apos;ll reach out.
              </p>
            </div>
          </div>
        </div>
        <div className='md:-mt-12 md:-ml-12 md:p-12 scroll-pt-24 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <div className='w-full p-0 md:p-3 max-w-none rounded-xl bg-slate-900 shadow-xl ring-1 ring-slate-400/10 sm:w-[57rem] flex justify-start items-center'>
            <form
              className='flex flex-col gap-6 p-6 w-full md:w-[65%]'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label htmlFor='firstName' className='sr-only'>
                  First Name
                </label>
                <input
                  {...register('firstName', { required: true })}
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='bg-slate-400 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                  placeholder='First Name*'
                />
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
                  className='bg-slate-400 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                  placeholder='Last Name*'
                />
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
                  className='bg-slate-400 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                  placeholder='you@email.com*'
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>
                  Message
                </label>
                <textarea
                  {...register('message', { required: true })}
                  name='message'
                  id='message'
                  className='bg-slate-400 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
                  placeholder='How Can We Work Together?*'
                  rows={3}
                />
              </div>
              <button
                className='bg-clemson hover:bg-clemson-dark text-lg py-3 px-5 rounded-lg font-bold text-white'
                type='submit'
              >
                Let&apos;s Talk
              </button>
            </form>
          </div>
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <ul role='list' className='space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-clemson'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Custom Course Development.
                    </strong>{' '}
                    Our instructional designers have decades of experience in
                    packaging and can work with your teams to develop courses
                    that educate your market, raise awareness, and provide a
                    pathway to sales.{' '}
                    <div className='inline-flex items-center gap-1 ml-1'>
                      <div className='underline'>Download Info Sheet</div>
                      <div>
                        <ArrowLongRightIcon className='text-slate-900 w-5 h-5' />
                      </div>
                    </div>
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-clemson'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Continuing Education.
                    </strong>{' '}
                    Statistics show that an overwhelmingly high percentage of
                    employees would stay at their current job if their company
                    were to invest in their growth and development.{' '}
                    <div className='inline-flex items-center gap-1 ml-1'>
                      <div className='underline'>Download Info Sheet</div>
                      <div>
                        <ArrowLongRightIcon className='text-slate-900 w-5 h-5' />
                      </div>
                    </div>
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-clemson'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Thought Leaders.
                    </strong>{' '}
                    We want to hear how you are improving our industry. There
                    may be opportunities for collaboration on sponsored
                    educational marketing of your brand in our existing courses.{' '}
                    <div className='inline-flex items-center gap-1 ml-1'>
                      <div className='underline'>Download Info Sheet</div>
                      <div>
                        <ArrowLongRightIcon className='text-slate-900 w-5 h-5' />
                      </div>
                    </div>
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-clemson'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Sponsorships.
                    </strong>{' '}
                    To stay true to our mission of bridging the gap between
                    academia and industry, the Packaging School selects market
                    leaders in each area of instruction to provide their
                    expertise and make known their unique positioning.{' '}
                    <div className='inline-flex items-center gap-1 ml-1'>
                      <div className='underline'>Download Info Sheet</div>
                      <div>
                        <ArrowLongRightIcon className='text-slate-900 w-5 h-5' />
                      </div>
                    </div>
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-clemson'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      In-Person Training.
                    </strong>{' '}
                    Dr. Andrew Hurley speaks and moderates over a dozen
                    conferences and summits annually, delivers presentations
                    internationally and consults with many Fortune 100 firms. He
                    might be what you need at your next conference or training
                    event.{' '}
                    <div className='inline-flex items-center gap-1 ml-1'>
                      <div className='underline'>Download Info Sheet</div>
                      <div>
                        <ArrowLongRightIcon className='text-slate-900 w-5 h-5' />
                      </div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBottom;
