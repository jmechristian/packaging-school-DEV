import React from 'react';
import algoliasearch from 'algoliasearch/lite';

import '@algolia/autocomplete-theme-classic';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { closeSearch } from '../../features/navigation/navigationSlice';
import CertIcon from '../icons/CertIcon';
import CourseIcon from '../icons/CourseIcon';
import WorkshopIcon from '../icons/WorkshopIcon';
import {
  Hits,
  Index,
  InstantSearch,
  SearchBox,
  Highlight,
} from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

export function ProductItem({ hit, components }) {
  return (
    <a href={hit.slug} className='aa-ItemLink'>
      <div className='flex flex-col px-3 py-1.5'>
        <div className='font-greycliff font-semibold leading-snug text-lg dark:text-white'>
          <Highlight hit={hit} attribute='title' />
        </div>
        <div className='aa-ItemTitle line-clamp-2  text-slate-600 dark:text-white/50'>
          <Highlight hit={hit} attribute='subheadline' />
        </div>
        <div className='aa-ItemTitle line-clamp-2   text-slate-600'>
          <Highlight hit={hit} attribute='subhead' />
        </div>
      </div>
    </a>
  );
}

const SearchContainer = () => {
  const dispatch = useDispatch();

  const tags = [
    {
      value: 'sustainability',
    },
    {
      value: 'plastic',
    },
    {
      value: 'cardboard',
    },
    {
      value: 'prototyping',
    },
    {
      value: 'packaging design',
    },
  ];

  const cirriculum = [
    {
      title: 'Certificate of Certificate of Mastery in Packaging Management',
      subtitle:
        "Conducted in collaboration with Clemson University's Center for Corporate Learning, this 12-week, PhD-Led certificate program is perfect for ambitious professionals seeking to advance their career in the packaging industry and for companies actively seeking future leaders and rising stars to lead their teams.",
      link: '/certificates/get-to-know-cmpm',
      type: 'CERTIFICATE',
      icon: (
        <CertIcon className='w-9 h-9 fill-transparent stroke-slate-400 stroke-2' />
      ),
    },
    {
      title: 'Automotive Packaging Certificate',
      subtitle:
        'Learn the unique landscape of automotive packaging - from returnable packaging systems through expendable case studies and applications, supplier databases, transportation, and unique SME feedback, there is no other program that provides this type of content.',
      link: '/certificates/get-to-know-apc',
      type: 'CERTIFICATE',
      icon: (
        <CertIcon className='w-9 h-9 fill-transparent stroke-slate-400 stroke-2' />
      ),
    },
    {
      title: 'Packaging Foundations',
      subtitle:
        'An essential introduction to the art, science, and business of packaging. After taking this course, you will have the thought process required of a successful stakeholder in the packaging development process.',
      link: '/courses/packaging-foundations',
      type: 'COURSE',
      icon: (
        <CourseIcon className='w-9 h-9 fill-transparent stroke-slate-400 stroke-2' />
      ),
    },
    {
      title: 'Pack Design Workshop',
      subtitle:
        'Master the fundamentals of packaging design in this immersive, online workshop. Work through the design process from ideation to building your own digital prototypes.',
      link: 'https://library.packagingschool.com/packdesign-camp',
      type: 'WORKSHOP',
      icon: (
        <WorkshopIcon className='w-9 h-9 fill-transparent stroke-slate-400 stroke-2' />
      ),
    },
  ];

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
    <div className='fixed inset-0 justify-center items-between py-20 bg-black/60 backdrop-blur-sm z-[60]'>
      <div className='dark:bg-[#222] bg-white w-full h-full rounded-lg lg:max-w-6xl lg:mx-auto  grid grid-cols-3 '>
        <div className='col-span-2 p-9'>
          <InstantSearch
            searchClient={searchClient}
            indexName='COURSES'
            insights={true}
          >
            <div className='w-full flex flex-col gap-6'>
              <SearchBox
                classNames={{
                  input: 'w-full text-lg font-medium py-4',
                  submitIcon: 'hidden',
                }}
                placeholder='What do you want to learn today?...'
              />

              <Index indexName='CERTIFICATES'>
                <div className='w-full bg-slate-400 text-slate-700 text-sm font-bold font-greycliff px-6 py-1.5'>
                  CERTIFICATES
                </div>
                <Hits hitComponent={ProductItem} />
              </Index>

              <Index indexName='COURSES'>
                <div className='w-full bg-slate-400 text-slate-700 text-sm font-bold font-greycliff px-6 py-1.5'>
                  COURSES
                </div>
                <Hits />
              </Index>
            </div>
          </InstantSearch>
        </div>
        <div className='col-span-1 dark:bg-black/70 bg-slate-100 rounded-lg py-6 px-2'>
          <div className='flex flex-col gap-9'>
            <div className='px-6 py-3 row-span-2 flex flex-col gap-3'>
              <div className='font-greycliff font-semibold text-slate-500 dark:text-clemson text-lg'>
                Popular Content
              </div>
              <hr />
              <div className='flex flex-col gap-6 w-full mt-3'>
                {cirriculum.map((item) => (
                  <div
                    className='flex gap-3 items-start cursor-pointer'
                    key={item.link}
                  >
                    <div className='mt-1'>
                      {/* <div className='w-10 h-10 auto bg-slate-400' /> */}
                      {item.icon}
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='font-semibold font-greycliff leading-tight dark:text-white'>
                        {item.title}
                      </div>
                      <div className='text-sm line-clamp-2 text-slate-600 dark:text-white/40'>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='px-6 flex flex-col gap-3 overflow-hidden'>
              <div className='font-greycliff font-semibold text-slate-500 dark:text-clemson text-lg'>
                Popular Searches
              </div>
              <hr />
              <div className='flex flex-wrap items-center gap-3 mt-3'>
                {tags.map((tag) => (
                  <div
                    className='flex items-center gap-1 bg-slate-200 dark:bg-white/40 rounded-lg px-3 py-1.5'
                    key={tag.value}
                  >
                    <div>
                      <MagnifyingGlassIcon className='w-4 h-4 text-slate-600 dark:text-white' />
                    </div>
                    <div className='text-sm'>{tag.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
