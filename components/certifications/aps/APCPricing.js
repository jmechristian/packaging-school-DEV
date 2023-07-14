import React from 'react';
import Link from 'next/link';
import StatCard from '../../shared/StatCard';
import {
  RocketLaunchIcon,
  DocumentPlusIcon,
  CalendarDaysIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

const APCPricing = () => {
  return (
    <div>
      <div className='mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
        <div className='p-8 sm:p-10 lg:flex lg:flex-col lg:gap-12 lg:h-full'>
          <div className='mx-auto mb-9'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
              Future Proof Your Skills
            </h2>
            <div className='mt-6 text-xl text-gray-700 dark:text-gray-500 max-w-prose'>
              To start your journey,{' '}
              <span className='font-bold dark:text-white'>
                please feel out the short application form and submit your $25
                application fee.
              </span>{' '}
              If you have any inquiries, Diana Whitaker, our Student Engagement
              Director, is available to schedule a call with you to address all
              your questions and concerns.
            </div>
          </div>
          <div className='lg:grid lg:grid-cols-3 mt-6 flex flex-col gap-6'>
            <StatCard
              stat={
                <RocketLaunchIcon className='w-12 h-12 stroke-white dark:stroke-clemson' />
              }
              title='24/7 Online Access'
            />
            <StatCard
              stat={
                <DocumentPlusIcon className='w-12 h-12 stroke-white dark:stroke-clemson' />
              }
              title='No Application Required'
            />
            <StatCard
              stat={
                <BookOpenIcon className='w-12 h-12 stroke-white dark:stroke-clemson' />
              }
              title='Companion Workbook Included'
            />
            <div className='col-span-3 dark:text-white lg:text-lg'>
              Enroll 24/7. Team Discounts available. For questions or inquiries,
              please email Bianca@packagingschool.com
            </div>
          </div>
        </div>
        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-gray-900'>
                  $3,999
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                  USD
                </span>
              </p>
              <Link href='https://learn.packagingschool.com/courses/automotive-packaging-certificate'>
                <a className='mt-10 block w-full rounded-md bg-clemson px-3 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'>
                  Enroll Now
                </a>
              </Link>
              <p className='text-base font-semibold text-gray-600 mt-12'>
                Payment Plans are Available
              </p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-gray-900'>
                  $287
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                  /mo
                </span>
              </p>
              <Link href='https://learn.packagingschool.com/courses/automotive-packaging-certificate'>
                <a className='mt-10 block w-full rounded-md bg-clemson px-3 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'>
                  Enroll Now
                </a>
              </Link>
              <p className='mt-6 text-xs leading-4 text-gray-600'>
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APCPricing;
