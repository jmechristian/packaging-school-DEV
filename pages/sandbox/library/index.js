import React, { useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { getCustomer, listLessons } from '../../../src/graphql/queries';
import { Disclosure } from '@headlessui/react';
import {
  MinusSmallIcon,
  PlusSmallIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import LibraryHeader from '../../../components/library/LibraryHeader';
import SearchableCourseContainer from '../../../components/shared/SearchableCourseContainer';
import SearchableLessonContainer from '../../../components/shared/SearchableLessonContainer';

const Page = ({ customer, lessons }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isForm, setIsForm] = useState('');
  const [isError, setError] = useState(false);

  const submitHandler = async () => {};

  const faqs = [
    {
      id: 1,
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      id: 2,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: 'What do you call someone with no body and no nose?',
      answer:
        'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      id: 4,
      question: 'Why do you never see elephants hiding in trees?',
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];

  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();

  return (
    <>
      <Head>
        <title>Packaging School | Acme</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div className='w-full max-w-7xl px-3 md:px-6 lg:px-0 flex flex-col gap-10 md:gap-28 py-5 md:py-6 lg:py-16 mx-auto'>
        <div id='one' ref={oneRef}>
          <LibraryHeader
            displayName={customer.displayName}
            email={customer.email}
            logo={customer.logo}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <div id='two' ref={twoRef}>
            <SearchableCourseContainer
              title={'Acme Knowledge Library Topics'}
              open={true}
              table={true}
              courses={customer.courses.items}
              bg={'bg-[#ea2d2d]'}
              text={'text-white'}
              Icon={AcademicCapIcon}
              highlight={'bg-black'}
            />
          </div>
          <div id='three' ref={threeRef}>
            <SearchableCourseContainer
              title={'Packaging School Course Offerings'}
              open={false}
              table={true}
              courses={customer.pscourses.items}
              Icon={AcademicCapIcon}
              cash={true}
              highlight={'bg-clemson'}
              bg={'bg-base-brand'}
              text={'text-white'}
            />
          </div>
          <div id='four' ref={fourRef}>
            <SearchableLessonContainer
              title={'Learning of the Month'}
              open={false}
              table={true}
              lessons={lessons}
              Icon={BookmarkSquareIcon}
              highlight={'bg-clemson'}
              bg={'bg-base-brand'}
              text={'text-white'}
            />
          </div>
          <div id='five' ref={fiveRef}>
            <div className='bg-neutral-200'>
              <div className='mx-auto max-w-7xl px-6 py-12 lg:px-16 flex flex-col gap-12'>
                <div className='flex flex-col lg:flex-row items-center bg-neutral-100/80 px-6 py-9 border border-black'>
                  <div className='flex flex-col gap-4 pb-10 max-w-sm h-full justify-center'>
                    <h2 className='text-xl lg:text-2xl font-bold leading-10 tracking-tight text-gray-900'>
                      Looking to Learn More?
                    </h2>
                    <p className='text-neutral-600'>
                      Any courses you are looking for? Fill out the suggestion
                      form to let us know the courses and topics you would like
                      to explore.
                    </p>
                  </div>
                  <div className='w-full h-full bg-white border border-black overflow-hidden'>
                    <textarea
                      rows={5}
                      className='w-full h-full leading-tight border-none p-3 focus:ring-0 resize-none placeholder:text-sm placeholder:text-neutral-400'
                      name='unilever-request'
                      id='unilever-request'
                      value={isForm}
                      onChange={(e) => setIsForm(e.target.value)}
                      placeholder='Enter your suggestions.'
                    />
                    <div className='flex w-full justify-end pr-3 mb-2 gap-6'>
                      {isError ? (
                        <div>
                          <span className='text-sm text-red-500'>
                            Error sending form.
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                      <button
                        className=' bg-clemson hover:bg-clemson-dark border border-black cursor-pointer text-white text-sm px-2 py-1.5 '
                        onClick={submitHandler}
                      >
                        <div className={isSending ? 'animate-pulse' : ''}>
                          {isSending ? 'Sending' : isSent ? 'Sent!' : 'Submit'}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='mx-auto divide-y divide-gray-900/10 w-full'>
                  <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
                    Frequently asked questions
                  </h2>
                  <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
                    {faqs.map((faq) => (
                      <Disclosure as='div' key={faq.question} className='pt-6'>
                        {({ open }) => (
                          <>
                            <dt>
                              <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
                                <span className='text-base font-semibold leading-7'>
                                  {faq.question}
                                </span>
                                <span className='ml-6 flex h-7 items-center'>
                                  {open ? (
                                    <MinusSmallIcon
                                      className='h-6 w-6'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <PlusSmallIcon
                                      className='h-6 w-6'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                              <p className='text-base leading-7 text-gray-600'>
                                {faq.answer}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await API.graphql({
    query: getCustomer,
    variables: { id: 'f98b155b-b06b-4f5a-822f-ddf47bca0a30' },
  });
  const customer = res.data.getCustomer;

  const lotm = await API.graphql({
    query: listLessons,
    variables: { filter: { type: { eq: 'LOTM' } }, limit: 200 },
  });

  const lessons = lotm.data.listLessons.items;

  return {
    props: { customer, lessons },
  };
}

export default Page;
