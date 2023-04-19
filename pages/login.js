// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// function App({ isPassedToWithAuthenticator, signOut, user }) {
//   if (!isPassedToWithAuthenticator) {
//     throw new Error(`isPassedToWithAuthenticator was not provided`);
//   }

//   return (
//     <div>
//       <h1>Hello {user.username}</h1>
//       <button onClick={signOut}>Sign out</button>
//     </div>
//   );
// }

// export default withAuthenticator(App);

// export async function getStaticProps() {
//   return {
//     props: {
//       isPassedToWithAuthenticator: true,
//     },
//   };
// }

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Page = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href='/api/auth/logout'>Logout</a>
      </div>
    );
  }

  return <a href='/api/auth/login?returnTo=/all_courses'>Login</a>;
};

export default Page;
