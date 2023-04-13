import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import { Analytics, Amplify } from 'aws-amplify';
import Link from 'next/link';
import algoliasearch from 'algoliasearch/lite';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { store } from '../features/store';
import { Provider } from 'react-redux';
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
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
