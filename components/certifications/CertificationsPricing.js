import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  '12-Months Access',
  'Choose Your Own Electives',
  '12 Expert-led Courses',
  'Instructor Email Access',
];

const tiers = [
  {
    name: 'Pay In Full',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$3,999',
    description:
      'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
    features: [
      '12-Months Access',
      'Choose Your Own Electives',
      '12 Expert-led Courses',
      'Instructor Email Access',
    ],
    callout: 'Most Savings!',
    monthly: false,
  },
  {
    name: 'Flex Payments',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$349',
    description:
      'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
    features: [
      '12-Months Access',
      'Choose Your Own Electives',
      '12 Expert-led Courses',
      'Instructor Email Access',
    ],
    monthly: true,
  },
];

const CertificationsPricing = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='font-greycliff text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
            Flexible pricing
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-500 dark:text-white/60'>
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className='flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'
            >
              <div>
                <div className='flex items-center justify-between gap-x-4'>
                  <h3 className='text-xl md:text-2xl font-greycliff font-semibold leading-8 dark:text-white text-slate-900'>
                    {tier.name}
                  </h3>
                  {tier.callout ? (
                    <p className='rounded-full bg-base-mid py-1 px-2.5 text-xs font-semibold leading-5 text-white'>
                      {tier.callout}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div className='mt-4 flex items-baseline gap-x-2'>
                  <span className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {tier.priceMonthly}
                  </span>
                  {tier.monthly ? (
                    <span className='text-base font-semibold leading-7 text-gray-500 dark:text-white/60'>
                      /month
                    </span>
                  ) : null}
                </div>
                <p className='mt-6 text-base leading-7 text-gray-500 dark:text-white/60'>
                  {tier.description}
                </p>
                <ul
                  role='list'
                  className='mt-10 space-y-4 text-sm leading-6 text-gray-500 dark:text-white/60'
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-clemson'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className='mt-8 block rounded-md bg-clemson-dark px-3.5 py-3.5 text-center text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson-dark'
              >
                Apply Today
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPricing;
