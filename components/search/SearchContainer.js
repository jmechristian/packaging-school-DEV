import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import { Autocomplete } from './Autocomplete';
import '@algolia/autocomplete-theme-classic';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import Link from 'next/link';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { closeSearch } from '../../features/navigation/navigationSlice';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

export function ProductItem({ hit, components }) {
  return (
    <a href={hit.slug} className='aa-ItemLink'>
      <div className='flex flex-col px-3 py-1.5'>
        <div className='font-greycliff font-semibold leading-snug'>
          <components.Highlight hit={hit} attribute='title' />
        </div>
        <div className='aa-ItemTitle line-clamp-2 text-sm text-slate-600'>
          <components.Highlight hit={hit} attribute='subheadline' />
        </div>
        <div className='aa-ItemTitle line-clamp-2 text-sm text-slate-600'>
          <components.Highlight hit={hit} attribute='subhead' />
        </div>
      </div>
    </a>
  );
}

const SearchContainer = () => {
  const dispatch = useDispatch();

  const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
    key: 'RECENT_SEARCH',
    limit: 5,
  });

  const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: 'COURSES_query_suggestions',
    getSearchParams() {
      return {
        hitsPerPage: 12,
      };
    },
  });

  return (
    <div className='fixed inset-0 flex justify-center items-between p-4 bg-black/60 backdrop-blur-sm z-[60]'>
      <div className='dark:bg-[#222] bg-white w-full h-full rounded-lg p-12 flex flex-col justify-between lg:max-w-7xl lg:mx-auto'>
        <Autocomplete
          // onStateChange={(state) => console.log(state)}
          plugins={[recentSearchesPlugin, querySuggestionsPlugin]}
          elements={{ recentSearchesPlugin, querySuggestionsPlugin }}
          getSources={({ query }) => {
            // if (!query) {
            //   return [
            //     {
            //       sourceId: 'links',
            //       getItems() {
            //         return [
            //           { label: 'Shipping', url: '#shipping' },
            //           { label: 'Contact', url: '#contact' },
            //         ];
            //       },
            //       getItemUrl({ item }) {
            //         return item.url;
            //       },
            //       templates: {
            //         item({ item }) {
            //           return item.label;
            //         },
            //       },
            //     },
            //   ];
            // }

            return [
              {
                sourceId: 'COURSES',
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: 'COURSES',
                        query,
                      },
                    ],
                  });
                },
                templates: {
                  item({ item, components }) {
                    return <ProductItem hit={item} components={components} />;
                  },
                },
              },
              {
                sourceId: 'CERTIFICATES',
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: 'CERTIFICATES',
                        query,
                      },
                    ],
                  });
                },
                templates: {
                  item({ item, components }) {
                    return <ProductItem hit={item} components={components} />;
                  },
                },
              },
              {
                sourceId: 'LESSONS',
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: 'LESSONS',
                        query,
                      },
                    ],
                  });
                },
                templates: {
                  item({ item, components }) {
                    return <ProductItem hit={item} components={components} />;
                  },
                },
              },
              {
                sourceId: 'LIBRARY',
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: 'LIBRARY',
                        query,
                      },
                    ],
                  });
                },
                templates: {
                  item({ item, components }) {
                    return <ProductItem hit={item} components={components} />;
                  },
                },
              },
            ];
          }}
        />

        {/* <InstantSearch
            searchClient={searchClient}
            indexName='COURSES'
            insights={{ useCookie: true }}
          >
            <div className='w-full flex flex-col justify-between'>
              <div className='flex items-start justify-between w-full'>
                <div className='flex gap-2 items-center mb-3'>
                  <div>
                    <MagnifyingGlassIcon className='w-5 h-5 fill-white' />
                  </div>
                  <div className='font-semibold font-greycliff text-white text-2xl'>
                    Search
                  </div>
                </div>
                <div onClick={() => dispatch(closeSearch())}>
                  <XMarkIcon className='w-6 h-6 fill-white' />
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-col gap-16 h-full'>
                  <SearchBox
                    placeholder='What Do You Want To Learn?'
                    autoFocus
                    classNames={{
                      root: 'w-full',
                      input: 'w-full bg-[#383838] text-white rounded-lg',
                      submit: 'hidden',
                      submitIcon: 'hidden',
                      reset: 'hidden',
                    }}
                  />
                  <div className='grid grid-cols-2 gap-9'>
                    <div className='w-full flex flex-col'>
                      <div className='font-greycliff font-semibold text-lg text-white'>
                        In Courses
                      </div>
                      <Index indexName='COURSES'>
                        <Configure hitsPerPage={3} />
                        <Hits
                          hitComponent={Hit}
                          classNames={{ list: 'divide-y' }}
                        />
                      </Index>
                    </div>
                    <div className='w-full flex flex-col'>
                      <div className='font-greycliff font-semibold text-lg text-white'>
                        In Certificates
                      </div>
                      <Index indexName='CERTIFICATES'>
                        <Configure hitsPerPage={3} />
                        <Hits
                          hitComponent={Hit}
                          classNames={{ list: 'divide-y' }}
                        />
                      </Index>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              classNames={{
                root: 'w-full',
                list: 'flex text-white gap-4 justify-center',
              }}
            />
          </InstantSearch> */}
      </div>
    </div>
  );
};

export default SearchContainer;
