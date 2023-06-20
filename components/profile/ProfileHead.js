import FormStat from './FormStat';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function ProfileHead({ user }) {
  return (
    <div className='overflow-hidden rounded-t-lg bg-white box-shadow-lg'>
      <h2 className='sr-only' id='profile-overview-title'>
        Profile Overview
      </h2>
      <div className='bg-white p-9'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='sm:flex sm:space-x-5'>
            <div className='flex-shrink-0'>
              <img
                className='mx-auto h-28 w-28 rounded-full'
                src={user.picture}
                alt=''
              />
            </div>
            <div className='mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex flex-col justify-center'>
              <p className='text-lg font-medium text-slate-600'>
                Welcome back,
              </p>
              <div className='text-xl font-bold text-slate-900 sm:text-4xl'>
                {user.name}
              </div>
              <p className=' font-medium text-slate-600 flex justify-center gap-1.5'>
                {user.title ? (
                  user.title
                ) : (
                  <span className='text-slate-400 underline'>Enter Title</span>
                )}{' '}
                at{' '}
                {user.company ? (
                  user.company
                ) : (
                  <span className='text-slate-400 underline'>
                    Enter Company
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 divide-y divide-slate-200 border-t border-slate-200 bg-base-mid sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
        <div className='sm:col-span-3 py-2.5 w-full bg-base-dark'>
          <div className='font-greycliff text-center font-semibold text-lg text-white'>
            Certificate Applications
          </div>
        </div>
        <FormStat
          label='CMPM'
          stat={user.cmpmFormID}
          link={'/certificate-of-mastery-in-packaging-management'}
          view={`/forms/cmpm/${user.id}`}
          updated={user.cmpmForm?.updatedOn}
          user={user}
        />
        <FormStat label='CPS' />
        <FormStat label='Automotive Packaging' />
      </div>
    </div>
  );
}
