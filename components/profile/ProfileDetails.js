import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function ProfileDetails() {
  return (
    <div className='px-16 py-12'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-lg font-bold font-greycliff leading-7 text-gray-900'>
          Your Information
        </h3>
        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
          Personal details and bio.
        </p>
      </div>
      <div className='mt-6'>
        <dl className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Full name
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              Jamie Christian
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Company
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              The Packaging School
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Email address
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              jamie@packagingschool.com
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Title
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              Web Director
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>Bio</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
