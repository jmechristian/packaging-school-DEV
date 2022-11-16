import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import Link from 'next/link';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import { store } from '../features/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const searchClient = algoliasearch(
    'W0TY58JH2W',
    '0014bb643f8b92e979f2e8c81e961ca6'
  );

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
