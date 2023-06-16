import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function SignInModal({ open, setOpen }) {
  const router = useRouter();
  const currentPath = router.asPath;
  console.log(currentPath);

  const signInHandler = () => {
    router.push(`/api/auth/login?returnTo=${currentPath}`);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-9'>
                <div>
                  <div className='mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-base-mid via-base-dark to-clemson shadow-sm'>
                    <RocketLaunchIcon
                      className='h-12 w-12 text-white/70'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-6'>
                    <Dialog.Title
                      as='h3'
                      className='text-xl font-greycliff font-semibold leading-6 text-gray-900'
                    >
                      Sign In to save your form.
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Access all your favorite courses and saved applications
                        all in one convenient place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-clemson px-3 py-3 text-lg font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson-dark'
                    onClick={signInHandler}
                  >
                    Sign In with LinkedIn
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
