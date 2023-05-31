import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function SalesHero() {
  return (
    <div className='bg-white'>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
        <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-24'>
          <div className='px-6 lg:px-0'>
            <div className='mx-auto max-w-2xl'>
              <div className='max-w-lg'>
                <img
                  className='w-44 h-auto'
                  src='https://packschool.s3.amazonaws.com/sandler_ps-logo.png'
                  alt='Sandler Sales Training'
                />
                <h1 className='mt-10 text-4xl font-bold tracking-tight text-gray-900 font-greycliff sm:text-6xl'>
                  Great sales people aren’t born. They’re trained.
                </h1>
                <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto mt-6'>
                  <div className='flex'>
                    <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                      <span className='font-semibold text-indigo-600'>
                        2023 Start Dates
                      </span>
                      <span
                        className='h-4 w-px bg-gray-900/10'
                        aria-hidden='true'
                      />
                      <a href='#' className='flex items-center gap-x-1'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        Jan 10, March 7, May 9, July 11, Aug 23, Oct 31
                      </a>
                    </div>
                  </div>
                </div>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Get on the fast track to sales success. Land more new
                  customers and provide better ideas to current customers. Click
                  below to get your place in Packaging Sales Fast Track this
                  year!
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <a
                    href='#'
                    className='rounded-md bg-clemson px-3.5 py-2.5 font-greycliff font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Get Started Today
                  </a>
                  <a
                    href='#'
                    className='font-semibold font-greycliff leading-6 text-gray-900'
                  >
                    Download Program Outline <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
            <div
              className='absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36'
              aria-hidden='true'
            />
            <div className='shadow-lg md:rounded-3xl'>
              <div className='bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]'>
                <div
                  className='absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36'
                  aria-hidden='true'
                />
                <div className='relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0'>
                  <div className='mx-auto max-w-2xl md:mx-0 md:max-w-none'>
                    <div className='w-screen overflow-hidden rounded-tl-xl bg-gray-900'>
                      <div className='flex bg-gray-800/40 ring-1 ring-white/5'>
                        <div className='-mb-px flex text-sm font-medium leading-6 text-gray-400'>
                          <div className='border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white'>
                            NotificationSetting.jsx
                          </div>
                          <div className='border-r border-gray-600/10 px-4 py-2'>
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className='px-6 pb-14 pt-6'>
                        {/* Your code example */}
                      </div>
                    </div>
                  </div>
                  <div
                    className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
    </div>
  );
}
