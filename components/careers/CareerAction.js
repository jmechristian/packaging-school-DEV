import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Disclosure, Transition } from '@headlessui/react';

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];
const tiers = [
  {
    name: 'Certificates',
    id: 'tier-startup',
    href: '#',
    features: [
      'Certificate of Mastery in Packaging Management',
      'Certificate of Packaging Science',
      'Automotive Packaging Certificate',
    ],
    mostPopular: true,
  },
  {
    name: 'Courses',
    id: 'tier-enterprise',
    href: '#',
    features: [
      'Core Courses',
      'Elective Courses',
      'Free Courses',
      'Beverage Courses',
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CareerAction = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className='bg-gray-900 py-16 sm:py-28'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-base md:text-lg font-semibold leading-7 text-base-brand font-greycliff'>
            Expert-Led Cirriculum
          </h2>
          <p className='mt-2 text-4xl font-semibold tracking-tight max-w-3xl mx-auto text-white sm:text-5xl font-greycliff'>
            How can the Packaging School Elevate my Career?
          </p>
        </div>
        <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-white/5 ring-2 ring-base-mid'
                  : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10 flex flex-col justify-between'
              )}
            >
              <div className='flex items-center justify-between gap-x-4'>
                <h3
                  id={tier.id}
                  className='text-xl md:text-2xl font-greycliff font-semibold leading-8 text-white'
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className='rounded-full bg-base-mid py-1 px-2.5 text-xs font-semibold leading-5 text-white'>
                    Most Extensive
                  </p>
                ) : null}
              </div>

              <div
                role='list'
                className='mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10'
              >
                {tier.features.map((feature) => (
                  <div key={feature}>
                    <Disclosure>
                      <Disclosure.Button>
                        <div className='flex gap-2'>
                          <div>
                            <PlusIcon className='w-7 h-7 text-clemson' />
                          </div>
                          <div className='text-base md:text-lg text-left'>
                            {feature}
                          </div>
                        </div>
                      </Disclosure.Button>

                      <Transition
                        enter='transition duration-100 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-75 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                      >
                        <Disclosure.Panel>
                          <div className='w-full h-full bg-gray-700 text-base md:text-lg py-6 px-6 rounded-lg my-2'>
                            The <u>Certificate of Mastery</u> is the most
                            extensive way for any Account Manager to learn the
                            ins and outs of packaging. Accepted applicants will
                            learn the stages of packaging development, material
                            procurement, and organizational management.
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                ))}
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-base-mid text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-base-mid'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                View {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAction;
