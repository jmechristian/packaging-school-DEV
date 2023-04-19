import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import ProfileHead from '../../components/profile/ProfileHead';
import ProfileDetails from '../../components/profile/ProfileDetails';
import ProfileStats from '../../components/profile/ProfileStats';

const Page = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className='bg-slate-100 min-h-screen'>
      <div className='py-24'>
        <div className='mx-auto max-w-6xl shadow-xl my-16 rounded-lg flex flex-col'>
          <ProfileHead user={user && user} />
          <ProfileDetails />
          <ProfileStats />
        </div>
      </div>
    </div>
  );
};

export default Page;
