import React from 'react';
import CPSPricing from './CPSPricing';
import { useFormContext } from 'react-hook-form';
import TextInput from '../TextInput';

const CPSApply = () => {
  const { register, formState } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <fieldset>
        <div className='flex justify-between items-center'>
          <legend className='text-sm md:text-base max-w-[75%] font-semibold leading-6 text-slate-700 font-greycliff'>
            Where did you hear about the Certificate of Mastery in Packaging
            Management?
          </legend>
          <span
            className='leading-6 text-red-500 text-sm md:text-base'
            id='email-optional'
          >
            Required
          </span>
        </div>
        <div>
          <div className='mt-6 gap-x-12 gap-y-3 flex flex-wrap items-center text-sm md:text-base'>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('referral', { required: true })}
                id='google'
                name='referral'
                value='google'
                type='radio'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='google'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Google
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('referral', { required: true })}
                id='linkedIn'
                name='referral'
                type='radio'
                value='linkedin'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='linkedIn'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                LinkedIn
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('referral', { required: true })}
                id='industry-show'
                name='referral'
                type='radio'
                value='industry-show'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='show'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Industry Conference/ Show
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('referral', { required: true })}
                id='colleague'
                name='referral'
                value='colleague'
                type='radio'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='colleague'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Colleague
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('referral', { required: true })}
                id='other'
                name='referral'
                value='other'
                type='radio'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='other'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Other
              </label>
              <TextInput name={'otherInput'} placeholder={'Other'} />
            </div>
          </div>
          {formState.errors.hasOwnProperty('referral') && (
            <div className='text-sm text-red-600 mt-3 mb-2'>
              Please fill out field.
            </div>
          )}
        </div>
      </fieldset>

      <fieldset>
        <div>
          <div className='flex justify-between items-center pt-6 text-sm md:text-base'>
            <legend className='font-semibold leading-6 text-slate-700 font-greycliff text-sm md:text-base'>
              How will you be paying for this program?
            </legend>
            <span className='leading-6 text-red-500' id='email-optional'>
              Required
            </span>
          </div>
          <div className='mt-6 gap-4 lg:gap-12 flex flex-wrap items-center text-sm md:text-base'>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('payment', { required: true })}
                id='self-pay'
                name='payment'
                value='self-pay'
                type='radio'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='self-pay'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Self Pay
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('payment', { required: true })}
                id='employer-paid'
                name='payment'
                value='employer-paid'
                type='radio'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='employer-paid'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Employer Paid
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('payment', { required: true })}
                id='employer-reimbursed'
                name='payment'
                value='employer-reimbursed'
                type='radio'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='employer-reimbursed'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Employer Reimbursed
              </label>
            </div>
            <div className='flex items-center gap-x-3'>
              <input
                {...register('payment', { required: true })}
                id='employer-benefits'
                name='payment'
                type='radio'
                value='employer-benefits'
                className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
              />
              <label
                htmlFor='employer-benefits'
                className='block font-medium font-greycliff leading-6 text-slate-900'
              >
                Employer Benefits
              </label>
            </div>
          </div>
        </div>
        {formState.errors.hasOwnProperty('payment') && (
          <div className='text-sm text-red-600 mt-4 mb-2'>
            Please fill out field.
          </div>
        )}
      </fieldset>
      <CPSPricing />
    </div>
  );
};

export default CPSApply;
