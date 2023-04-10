import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import CheckoutForm from '../../layout/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

const CMPMPricing = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  return (
    <div className='bg-white p-6 flex justify-center items-center mt-6'>
      <div className='mx-auto w-full'>
        <div className='mx-auto max-w-4xl rounded-3xl ring-1 ring-slate-200 lg:mx-0 lg:flex lg:max-w-none'>
          <div className='-mt-2 p-2 lg:mt-0 lg:w-full  lg:flex-shrink-0'>
            <div className='rounded-2xl bg-slate-50 py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12'>
              <div className='mx-auto max-w-xl px-4'>
                <p className='text-base font-bold text-slate-600 font-greycliff'>
                  Cost to submit application
                </p>
                <p className='mt-6 flex items-baseline justify-center gap-x-2 mb-6'>
                  <span className='text-5xl font-bold tracking-tight text-slate-900'>
                    $25
                  </span>
                  <span className='text-sm font-semibold leading-6 tracking-wide text-slate-600'>
                    USD
                  </span>
                </p>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
                <div className='text-sm text-slate-500 mt-6'>
                  Upon acceptance a student agreement form will be issued with
                  details on the course and billing options for the full CMPM
                  tuition of $7,000. Completion of this application is not an
                  obligation to enroll in the CMPM program.
                </div>
                {/* <a
                  href='#'
                  className='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get access
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMPMPricing;
