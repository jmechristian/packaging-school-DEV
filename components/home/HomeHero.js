import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import TextInput from '../layout/TextInput';
import { Autocomplete } from '../search/Autocomplete';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';

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

const HomeHero = () => {
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
    transformSource({ source }) {
      return {
        ...source,
        onSelect({ setIsOpen }) {
          setIsOpen(true);
        },
      };
    },
  });

  return (
    <div className='flex flex-col lg:flex-col-reverse gap-12 container__inner '>
      <div className='w-full flex flex-col gap-4 lg:max-w-4xl lg:mx-auto'>
        <Autocomplete
          openOnFocus={true}
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
      </div>
      <div className='flex flex-col gap-9 md:gap-12 lg:max-w-5xl lg:mx-auto lg:text-center lg:pt-24'>
        <div className='w-full flex flex-col gap-1 items-start md:items-center'>
          <div className='font-greycliff font-bold text-5xl md:text-6xl lg:text-8xl'>
            Become a
          </div>
          <TypeAnimation
            sequence={[
              'Packaging Consultant', // Types 'One'
              1000, // Waits 1s
              'Packaging Engineer', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'Sustainability Expert', // Types 'Three' without deleting 'Two',
              1000,
              'Logistics Expert',
              1000,
              'Startup Champion',
              1000,
              'Knowledge Leader',
              1000,
              () => {},
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            className='font-greycliff text-5xl font-bold md:text-6xl lg:text-8xl'
          />
        </div>
        <div className='text-slate-600 text-lg md:text-xl lg:text-2xl lg:leading-normal'>
          Join the tens of thousands of people across the globe that have
          leveraged the expert-led curriculum of the Packaging School to stand
          out amongst their peers, accelerate their teams, and develop
          cost-efficient, packaging solutions for their companies and startups.
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
