import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { store } from '../features/store';
import { Provider } from 'react-redux';
import { Amplify, Auth, Hub } from 'aws-amplify';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData) => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);

  async function getUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      return userData;
    } catch {
      return console.log('Not signed in');
    }
  }

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Provider store={store}>
          <Layout user={user}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
