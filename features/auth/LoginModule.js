import { useEffect } from 'react';

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';

const LoginModule = () => {
  //   const { route } = useAuthenticator((context) => [context.route]);
  //   const router = useRouter();
  //   let from = router.pathname || '/';
  //     useEffect(() => {
  //       if (route === 'authenticated') {
  //         router.push(from, { replace: true });
  //       }
  //     }, [route, router, from]);
  return (
    <View className='auth-wrapper flex justify-center items-center h-full'>
      <Authenticator></Authenticator>
    </View>
  );
};

export default LoginModule;
