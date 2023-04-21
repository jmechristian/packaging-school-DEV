import React, { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

const ProfileBlock = ({ user }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      {user ? (
        <div
          className='relative'
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        >
          <div className='flex gap-2 items-center'>
            <div
              className='w-8 h-8 rounded-full bg-cover bg-center ring-1 ring-white'
              style={{ backgroundImage: `url(${user.picture})` }}
            ></div>
            <div className='flex flex-col'>
              <div className='text-white text-xs tracking-widest  uppercase font-bold font-greycliff leading-none'>
                Hello
              </div>
              <div className='text-base-brand font-greycliff leading-none'>
                {user.name}
              </div>
            </div>
          </div>
          <Transition
            show={isShowing}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='absolute z-40 bg-white w-40 mt-3 shadow'>
              <div className='flex flex-col p-4'>
                <div className='text-sm text-slate-700'>
                  <Link href='/profile'>My Profile</Link>
                </div>
                <div className='text-sm text-slate-700'>
                  <a href='/api/auth/logout'>Logout</a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      ) : (
        <div className='flex gap-6 items-center justify-center'>
          <div>
            <UserCircleIcon
              className={`w-6 h-6 stroke-white hidden lg:block xl:hidden`}
            />
          </div>
          <div
            className={` cursor-pointer dark:white font-greycliff  text-white hidden xl:block text-sm font-semibold xl:text-base`}
          >
            <a href='/api/auth/login?returnTo=/profile'>Login</a>
          </div>
          <button className='text-sm font-bold xl:text-base bg-clemson hover:bg-clemson-dark rounded hidden xl:block'>
            <div className='px-4 py-2 text-white font-greycliff'>
              Join for Free
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileBlock;
