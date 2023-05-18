import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import ProfileHead from '../../components/profile/ProfileHead';
import ProfileDetails from '../../components/profile/ProfileDetails';
import ProfileStats from '../../components/profile/ProfileStats';
// import { API } from 'aws-amplify';
// import { usersByEmail } from '../../src/graphql/queries';

export default withPageAuthRequired(function Page() {
  const currentUser = useSelector((state) => state.auth.user);
  // const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getUserData = async () => {
  //     const data = await API.graphql({
  //       query: usersByEmail,
  //       variables: { email: user.email },
  //     });

  //     setCurrentUser(data.data.usersByEmail.items[0]);
  //   };

  //   getUserData();
  // }, [user.email]);

  return (
    <div className='bg-slate-100 min-h-screen'>
      <div className='md:py-16'>
        <div className='mx-auto max-w-6xl shadow-xl my-16 rounded-lg flex flex-col'>
          {currentUser && (
            <>
              <ProfileHead user={currentUser} />
              <ProfileDetails user={currentUser} />
              <ProfileStats />
            </>
          )}
        </div>
      </div>
    </div>
  );
});
