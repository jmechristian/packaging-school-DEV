import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import CTAButton from '../shared/CTAButton';

export default function SignInModal({ open, setOpen }) {
  const router = useRouter();
  const currentPath = router.asPath;

  const signInHandler = () => {
    router.push(`/api/auth/login?returnTo=${currentPath}`);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-5 pb-6 pt-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-9'>
                <div className='flex flex-col lg:flex-row gap-9 lg:gap-12 text-center lg:text-left'>
                  <div
                    className='aspect-[4/2] lg:aspect-[3/4] w-full bg-black rounded-xl bg-cover bg-center'
                    style={{
                      backgroundImage: `url('https://packschool.s3.amazonaws.com/signin_mock.webp')`,
                    }}
                  ></div>
                  <div className='flex flex-col gap-4'>
                    <Dialog.Title
                      as='h2'
                      className='text-2xl xl:text-4xl font-greycliff font-semibold leading-7 text-gray-900'
                    >
                      Save all your favorite PackagingSchool.com content!
                    </Dialog.Title>
                    <div>
                      <p className='lg:text-lg text-gray-500 leading-snug'>
                        Access all your starred PackagingSchool.com content
                        including courses, articles, saved applications, and
                        more. Use your LinkedIn or Google accounts to get
                        started.{' '}
                        <span className='font-semibold'>
                          Please Note: This is seperate login from your LMS
                          Dashboard login.{' '}
                        </span>
                      </p>
                    </div>
                    <div className='mt-3'>
                      <button
                        className='bg-green-600 text-white lg:text-lg font-semibold rounded-lg py-3 w-full'
                        onClick={() =>
                          router.push('https://learn.packagingschool.com')
                        }
                      >
                        Already a Student?
                        <br /> Go to your LMS Dashboard
                      </button>
                      <CTAButton
                        text='Sign In to PackagingSchool.com with your Google or LinkedIn'
                        click={signInHandler}
                      />
                    </div>
                    <div className='text-sm text-center lg:text-left text-gray-600 mt-2'>
                      Issues logging in? Email{' '}
                      <a href='mailto:info@packagingschool.com'>
                        info@packagingschool.com.
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
