import React, { useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { getCustomer, listLessons } from '../../../src/graphql/queries';
import { Disclosure } from '@headlessui/react';
import { MdSnooze } from 'react-icons/md';
import { useRouter } from 'next/router';
import {
  MinusSmallIcon,
  PlusSmallIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import LibraryHeader from '../../../components/library/LibraryHeader';
import SearchableCourseContainer from '../../../components/shared/SearchableCourseContainer';
import SearchableLessonContainer from '../../../components/shared/SearchableLessonContainer';
import StepZero from '../../../components/tour/StepZero';
import StepOne from '../../../components/tour/StepOne';
import StepTwo from '../../../components/tour/StepTwo';
import StepThree from '../../../components/tour/StepThree';
import StepFour from '../../../components/tour/StepFour';
import StepFive from '../../../components/tour/StepFive';
import StepSix from '../../../components/tour/StepSix';

const Page = ({ customer, lessons }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isForm, setIsForm] = useState('');
  const [isError, setError] = useState(false);
  const [isStage, setIsStage] = useState(0);
  const [isSnooze, setIsSnooze] = useState(false);

  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();

  const router = useRouter();

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

  const stepChangeHandler = (step) => {
    setIsStage(step);
  };

  const snoozeHandler = () => {
    router.push('/certifications');
  };

  useEffect(() => {
    if (isStage === -1) {
      return;
    }

    if (isStage === 1) {
      oneRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (isStage === 2) {
      twoRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (isStage === 3) {
      threeRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (isStage === 5) {
      fourRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (isStage === 4) {
      fiveRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [isStage]);

  return (
    <>
      <Head>
        <title>Packaging School | Acme</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div className='w-full max-w-7xl px-3 md:px-6 lg:px-0 flex flex-col gap-10 md:gap-24 py-5 md:py-10 lg:py-16 mx-auto relative'>
        {/* INIT MODAL */}
        {isSnooze ? (
          <div className='fixed bottom-5 left-5 md:left-10 z-20'>
            <div className='w-16 h-16 rounded-full bg-clemson border-2 border-black flex items-center justify-center transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] cursor-pointer'>
              <MdSnooze size={28} color='white' />
            </div>
          </div>
        ) : (
          <></>
        )}
        {isStage === 0 ? (
          <div className='inset-0 bg-black/60 backdrop-blur-sm fixed z-[60] flex items-center justify-center px-4'>
            <StepZero
              snooze={() => snoozeHandler()}
              next={() => stepChangeHandler(1)}
            />
          </div>
        ) : (
          <></>
        )}
        {isStage === 6 ? (
          <div className='inset-0 bg-black/60 backdrop-blur-sm fixed z-[60] flex items-center justify-center px-4'>
            <StepSix
              snooze={() => snoozeHandler()}
              next={() => stepChangeHandler(1)}
            />
          </div>
        ) : (
          <></>
        )}
        <div id='one' ref={oneRef} className='relative scroll-mt-10'>
          {isStage === 1 ? (
            <div className='top-0 left-20 lg:right-0 absolute z-[60] flex items-center justify-center px-4'>
              <StepOne
                snooze={() => snoozeHandler()}
                next={() => stepChangeHandler(2)}
                back={() => stepChangeHandler(0)}
              />
            </div>
          ) : (
            <></>
          )}
          <LibraryHeader
            displayName={customer.displayName}
            email={customer.email}
            logo={customer.logo}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <div id='two' ref={twoRef} className='relative'>
            {isStage === 2 ? (
              <div className='top-28 left-0 absolute z-[60] flex items-center justify-center px-4'>
                <StepTwo
                  snooze={() => snoozeHandler()}
                  next={() => stepChangeHandler(3)}
                  back={() => stepChangeHandler(1)}
                />
              </div>
            ) : (
              <></>
            )}
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
          <div id='three' ref={threeRef} className='relative'>
            {isStage === 3 ? (
              <div className='top-28 left-0 absolute z-[60] flex items-center justify-center px-4'>
                <StepThree
                  snooze={() => snoozeHandler()}
                  next={() => stepChangeHandler(4)}
                  back={() => stepChangeHandler(2)}
                />
              </div>
            ) : (
              <></>
            )}
            <SearchableCourseContainer
              title={'Packaging School Course Offerings'}
              open={true}
              table={true}
              courses={customer.pscourses.items}
              Icon={AcademicCapIcon}
              cash={true}
              highlight={'bg-clemson'}
              bg={'bg-base-brand'}
              text={'text-white'}
            />
          </div>
          <div id='four' ref={fourRef} className='relative'>
            {isStage === 5 ? (
              <div className='top-20 left-0 absolute z-[60] flex items-center justify-center px-4'>
                <StepFour
                  snooze={() => snoozeHandler()}
                  next={() => stepChangeHandler(6)}
                  back={() => stepChangeHandler(4)}
                />
              </div>
            ) : (
              <></>
            )}
            <SearchableLessonContainer
              title={'Learning of the Month'}
              open={true}
              table={true}
              lessons={lessons}
              Icon={BookmarkSquareIcon}
              highlight={'bg-clemson'}
              bg={'bg-base-brand'}
              text={'text-white'}
            />
          </div>
          <div id='five' ref={fiveRef} className='relative'>
            {isStage === 4 ? (
              <div className='top-40 left-0 absolute z-[60] flex items-center justify-center px-4'>
                <StepFive
                  snooze={() => snoozeHandler()}
                  next={() => stepChangeHandler(5)}
                  back={() => stepChangeHandler(3)}
                />
              </div>
            ) : (
              <></>
            )}
            <div className='bg-neutral-200'>
              <div className='mx-auto max-w-7xl px-3 md:px-6 py-12 lg:px-16 flex flex-col gap-12'>
                <div className='flex flex-col lg:flex-row items-center md:items-start bg-neutral-100/80 px-6 py-9 border border-black'>
                  <div className='flex flex-col gap-4 pb-10 max-w-sm md:max-w-full h-full justify-center'>
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
