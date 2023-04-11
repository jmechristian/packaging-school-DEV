import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../TextInput';
import CMPMPricing from './CMPMPricing';

const CMPMSessionInfo = ({ activeIndex }) => {
  const { register } = useFormContext();
  return (
    <div
      className='flex flex-col gap-6 divide-y divide-solid pt-4'
      style={{ display: activeIndex === 3 ? 'flex' : 'none' }}
    >
      <fieldset>
        <div className='flex justify-between items-center py-3'>
          <legend className='font-semibold leading-6 text-slate-700 font-greycliff'>
            Which session are you applying for?
          </legend>
          <span className='leading-6 text-red-500' id='email-optional'>
            Required
          </span>
        </div>
        <div className='mt-6 gap-12 flex items-center'>
          <div className='flex items-center gap-x-3'>
            <input
              {...register('july2023')}
              id='july2023'
              name='session-applying'
              type='radio'
              className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
            />
            <label
              htmlFor='july2023'
              className='block font-medium font-greycliff leading-6 text-slate-900'
            >
              July 2023
            </label>
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              {...register('sept2023')}
              id='sept2023'
              name='session-applying'
              type='radio'
              className='h-4 w-4 border-slate-300 text-base-brand focus:ring-base-brand'
            />
            <label
              htmlFor='sept2023'
              className='block font-medium font-greycliff leading-6 text-slate-900'
            >
              September 2023
            </label>
          </div>
        </div>
      </fieldset>
      <div className='relative flex gap-x-3 pt-6'>
        <div className='flex h-6 items-center'>
          <input
            {...register('opt-out')}
            id='opt-out'
            name='opt-out'
            type='checkbox'
            className='h-4 w-4 rounded border-slate-300 text-base-brand focus:ring-base-brand'
          />
        </div>
        <div className='leading-6'>
          <label
            htmlFor='comments'
            className='font-semibold font-greycliff text-slate-700'
          >
            I would like to opt out of early access to the online lessons.
          </label>
          <p className='text-sm mt-2 px-0 md:pr-9 text-slate-600 leading-normal'>
            Early access to the online lessons can be granted to anyone upon
            full payment of the tuition. Students participating in early access
            will not receive any feedback from the instructor until the cohort
            start date selected above. Students opting to not pay early in full
            will receive access to the lessons along with the rest of their
            cohort on the selected start date.
          </p>
        </div>
      </div>
      <fieldset>
        <div className='flex justify-between items-center pt-6'>
          <legend className='font-semibold leading-6 text-slate-700 font-greycliff'>
            Where did you hear about the Certificate of Mastery in Packaging
            Management?
          </legend>
          <span className='leading-6 text-red-500' id='email-optional'>
            Required
          </span>
        </div>
        <div className='mt-6 gap-x-12 gap-y-3 flex flex-wrap items-center'>
          <div className='flex items-center gap-x-3'>
            <input
              {...register('google')}
              id='google'
              name='refered-by'
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
              {...register('linkedIn')}
              id='linkedIn'
              name='refered-by'
              type='radio'
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
              {...register('show')}
              id='show'
              name='refered-by'
              type='radio'
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
              {...register('colleague')}
              id='colleague'
              name='refered-by'
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
              {...register('other')}
              id='other'
              name='refered-by'
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
      </fieldset>
      <fieldset>
        <div className='flex justify-between items-center pt-6'>
          <legend className='font-semibold leading-6 text-slate-700 font-greycliff'>
            How will you be paying for this program?
          </legend>
          <span className='leading-6 text-red-500' id='email-optional'>
            Required
          </span>
        </div>
        <div className='mt-6 gap-12 flex items-center'>
          <div className='flex items-center gap-x-3'>
            <input
              {...register('self-pay')}
              id='self-pay'
              name='paying'
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
              {...register('employer-paid')}
              id='employer-paid'
              name='paying'
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
              {...register('employer-reimbursed')}
              id='employer-reimbursed'
              name='paying'
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
              {...register('employer-benefits')}
              id='employer-benefits'
              name='paying'
              type='radio'
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
      </fieldset>
      <CMPMPricing />
    </div>
  );
};

export default CMPMSessionInfo;
