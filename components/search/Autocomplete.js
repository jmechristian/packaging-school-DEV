import { autocomplete } from '@algolia/autocomplete-js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';

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
  },
  {
    title: 'Automotive Packaging Certificate',
    subtitle:
      'Learn the unique landscape of automotive packaging - from returnable packaging systems through expendable case studies and applications, supplier databases, transportation, and unique SME feedback, there is no other program that provides this type of content.',
    link: '/certificates/get-to-know-apc',
    type: 'CERTIFICATE',
  },
  {
    title: 'Packaging Foundations',
    subtitle:
      'An essential introduction to the art, science, and business of packaging. After taking this course, you will have the thought process required of a successful stakeholder in the packaging development process.',
    link: '/courses/packaging-foundations',
    type: 'COURSE',
  },
  {
    title: 'Pack Design Workshop',
    subtitle:
      'Master the fundamentals of packaging design in this immersive, online workshop. Work through the design process from ideation to building your own digital prototypes.',
    link: 'https://library.packagingschool.com/packdesign-camp',
    type: 'WORKSHOP',
  },
];

export function Autocomplete(props) {
  const containerRef = useRef(null);
  const panelRootRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children, state, elements }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(
          <div className='grid grid-cols-2'>
            <div>
              {!state.query
                ? elements.querySuggestionsPlugin
                : elements.COURSES}
            </div>
            <div className='grid grid-rows-3 grid-cols-1 gap-6 bg-slate-100'>
              <div className='p-6 row-span-2 flex flex-col gap-3'>
                <div className='font-greycliff font-semibold text-slate-600'>
                  Popular Content
                </div>
                <hr />
                <div className='flex flex-col gap-6 w-full'>
                  {cirriculum.map((item) => (
                    <div
                      className='flex gap-2 items-center cursor-pointer'
                      key={item.link}
                    >
                      <div>
                        <div className='w-10 h-10 auto bg-slate-400' />
                      </div>
                      <div className='flex flex-col'>
                        <div className='font-semibold text-sm font-greycliff'>
                          {item.title}
                        </div>
                        <div className='text-sm line-clamp-2'>
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='px-6 flex flex-col gap-3 overflow-hidden'>
                <div className='font-greycliff font-semibold text-slate-700'>
                  Popular Searches
                </div>
                <hr />
                <div className='flex flex-wrap items-center gap-3 mt-3'>
                  {tags.map((tag) => (
                    <div
                      className='flex items-center gap-1 bg-slate-200 rounded-lg px-3 py-1.5'
                      key={tag.value}
                    >
                      <div>
                        <MagnifyingGlassIcon className='w-4 h-4 text-slate-600' />
                      </div>
                      <div className='text-sm'>{tag.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}
