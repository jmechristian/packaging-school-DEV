import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const schedule = [
  {
    session: 'Fall Session 1',
    dates: `Aug. 7, 2023 - \nOct. 27, 2023`,
    deadline: 'July 28, 2023',
  },
  {
    session: 'Fall Session 2',
    dates: `Sept. 25, 2023 - \nDec. 15, 2023`,
    deadline: 'Sept 15, 2023',
  },
  {
    session: 'Winter Session',
    dates: 'Dec. 4, 2023 - Feb. 23, 2024',
    deadline: 'Nov 24, 2023',
  },
];

export default function CMPMPricing() {
  return (
    <div>
      <div className='container-7xl'>
        <div className='mx-auto'>
          <h2 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
            Future Proof Your Skill
          </h2>
          <div className='mt-6 text-xl text-gray-700 dark:text-gray-500 max-w-prose'>
            To start your journey,{' '}
            <span className='font-bold dark:text-white'>
              please feel out the short application form and submit your $25
              application fee.
            </span>{' '}
            Our request is that you embrace the application as an opportunity
            for the Packaging School Education Team to understand your personal
            and professional goals so that we may ensure the CMPM program is a
            fit for you. You will receive both a confirmation of receipt soon
            after submission and personal response regarding your application
            within 1-3 business days.
          </div>
        </div>
        <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className='p-8 sm:p-10 lg:flex-auto'>
            <h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400'>
              Find Your Cohort
            </h3>
            <div className='grid grid-cols-3 gap-6 mt-6'>
              {schedule.map((it, i) => (
                <div
                  className='bg-dark-mid rounded-lg shadow-sm'
                  key={it.deadline}
                >
                  <div className='flex flex-col gap-3 p-4'>
                    <div className='text-base-brand uppercase tracking-wide text-sm font-semibold'>
                      {it.session}
                    </div>
                    <div className='text-white text-lg font-bold whitespace-pre-wrap'>
                      {it.dates}
                    </div>
                    <div className='text-base-brand uppercase tracking-wide text-sm font-semibold mt-9'>
                      Application Deadline
                    </div>
                    <div className='text-gray-400 text-lg font-bold whitespace-pre-wrap'>
                      {it.deadline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
            <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
              <div className='mx-auto max-w-xs px-8'>
                <p className='text-base font-semibold text-gray-600'>
                  Payment Plans are Available
                </p>
                <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                  <span className='text-5xl font-bold tracking-tight text-gray-900'>
                    $7,000
                  </span>
                  <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                    USD
                  </span>
                </p>
                <Link href='/certificate-of-mastery-in-packaging-management'>
                  <a className='mt-10 block w-full rounded-md bg-clemson px-3 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'>
                    Apply Now
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
    </div>
  );
}
