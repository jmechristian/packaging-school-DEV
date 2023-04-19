import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { store } from '../features/store';
import { Provider } from 'react-redux';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { createUser } from '../libs/api';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

export default function App({ Component, pageProps }) {
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
        <UserProvider>
          <Authenticator.Provider>
            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </Authenticator.Provider>
        </UserProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
