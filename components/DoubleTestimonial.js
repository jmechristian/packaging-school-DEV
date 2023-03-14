import React from 'react';

const DoubleTestimonial = () => {
  return (
    <section>
      <div className='relative isolate pt-24'>
        <svg
          className='absolute inset-0 -z-10 h-full w-full stroke-slate-400/20 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='1d4240dd-898f-445f-932d-e2872fd12de3'
              width={200}
              height={200}
              x='50%'
              y={0}
              patternUnits='userSpaceOnUse'
            >
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <svg
            x='50%'
            y={0}
            className='overflow-visible fill-slate-50 dark:fill-slate-800/20'
          >
            <path
              d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#1d4240dd-898f-445f-932d-e2872fd12de3)'
          />
        </svg>
        <div className='absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
          <svg
            viewBox='0 0 1108 632'
            aria-hidden='true'
            className='w-[69.25rem] flex-none'
          >
            <path
              fill='url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)'
              fillOpacity='.2'
              d='M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z'
            />
            {/* <defs>
              <linearGradient
                id='175c433f-44f6-4d59-93f0-c5c51ad5566d'
                x1='1220.59'
                x2='-85.053'
                y1='432.766'
                y2='638.714'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#04607e' />
                <stop offset={1} stopColor='#04607e' />
              </linearGradient>
            </defs> */}
          </svg>
        </div>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-24'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-lg font-bold leading-7 text-base-brand font-greycliff'>
              From Your Peers
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-5xl font-greycliff'>
              Invest in Your Future
            </p>
          </div>
          <div className='mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20'>
              <img
                className='h-12 self-start dark:invert-0'
                src='https://tailwindui.com/img/logos/tuple-logo-white.svg'
                alt=''
              />
              <figure className='mt-10 flex flex-auto flex-col justify-between'>
                <blockquote className='text-lg leading-8 text-slate-900 dark:text-white'>
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac. Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className='mt-10 flex items-center gap-x-6'>
                  <img
                    className='h-14 w-14 rounded-full bg-slate-50'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='text-base'>
                    <div className='font-semibold text-slate-900 dark:text-white'>
                      Judith Black
                    </div>
                    <div className='mt-1 text-slate-500'>CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className='flex flex-col border-t border-slate-900/10 dark:border-white/40 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20'>
              <img
                className='h-12 self-start dark:invert-0'
                src='https://tailwindui.com/img/logos/reform-logo-white.svg'
                alt=''
              />
              <figure className='mt-10 flex flex-auto flex-col justify-between'>
                <blockquote className='text-lg leading-8 text-slate-900 dark:text-white'>
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className='mt-10 flex items-center gap-x-6'>
                  <img
                    className='h-14 w-14 rounded-full bg-slate-50'
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='text-base'>
                    <div className='font-semibold text-slate-900 dark:text-white'>
                      Joseph Rodriguez
                    </div>
                    <div className='mt-1 text-slate-500'>CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubleTestimonial;
