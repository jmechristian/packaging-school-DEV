import React from 'react';
import GradientCTA from '../../components/GradientCTA';
import ChooseCert from '../../components/certifications/ChooseCert';
import PatternBackground from '../../components/layout/PatternBackground';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

const Index = () => {
  return (
    <div className='scroll-smooth isolate relative'>
      <PatternBackground />
      {/* Hero section */}
      <div className='pt-14'>
        <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight font-greycliff text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
              Level Up with One of Our Elite Packaging Certificates
            </h1>
            <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-lg md:text-xl text-gray-500 md:leading-9'>
                Designed for those students who want to separate themselves from
                their peers, these comprehensive certificate programs allow for
                structured or self-paced instructor from the industry&apos;s
                most trusted subject-matter experts.
              </p>
              <div className='flex gap-1 items-center mt-6 md:mt-12'>
                <p className='font-greycliff font-bold text-lg md:text-2xl'>
                  <a href='#perfectcert'>Find Your Perfect Certificate</a>
                </p>
                <div>
                  <ArrowDownCircleIcon className='w-7 h-7 text-clemson' />
                </div>
              </div>
            </div>
            <img
              src='https://packschool.s3.amazonaws.com/chris-marsh-psgrad02.jpeg'
              alt=''
              className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
      <div className='scroll-mt-16' id='perfectcert'>
        <ChooseCert />
      </div>
      <section className='bg-white py-12 sm:py-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20'>
              <img
                className='h-12 self-start'
                src='https://tailwindui.com/img/logos/tuple-logo-gray-900.svg'
                alt=''
              />
              <figure className='mt-10 flex flex-auto flex-col justify-between'>
                <blockquote className='text-lg leading-8 text-gray-900'>
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
                    className='h-14 w-14 rounded-full bg-gray-50'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='text-base'>
                    <div className='font-semibold text-gray-900'>
                      Judith Black
                    </div>
                    <div className='mt-1 text-gray-500'>CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className='flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20'>
              <img
                className='h-12 self-start'
                src='https://tailwindui.com/img/logos/reform-logo-gray-900.svg'
                alt=''
              />
              <figure className='mt-10 flex flex-auto flex-col justify-between'>
                <blockquote className='text-lg leading-8 text-gray-900'>
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className='mt-10 flex items-center gap-x-6'>
                  <img
                    className='h-14 w-14 rounded-full bg-gray-50'
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='text-base'>
                    <div className='font-semibold text-gray-900'>
                      Joseph Rodriguez
                    </div>
                    <div className='mt-1 text-gray-500'>CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <GradientCTA
        headline='Ready to Elevate Your Career?'
        subheadline='Try a demo, risk-free.'
        buttonText='Get Started For Free'
        secondaryButtonText='Need More Info?'
      />
    </div>
  );
};

export default Index;
