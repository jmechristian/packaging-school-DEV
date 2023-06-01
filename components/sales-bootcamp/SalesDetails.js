import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'First 60 Days',
    id: 'tier-hobby',
    href: '/sales-bootcamp-registration-page',
    priceMonthly: 'Fast Track Sales Bootcamp',
    description:
      'This program is the first step to our sales training. It introduces the core principles of the Sandler Sales System, promoting a more effective and efficient sales process. Each session is interactive and led by live instructors. You can expect real-time role-play opportunities, live reinforcement of learning, and customized coaching to answer your specific sales obstacles.',
    features: [
      '12 90-Minute Sessions',
      'Six Times Per Year',
      'Tuesdays & Thursdays 2:30-4 PM ET',
    ],
  },
  {
    name: 'Last 30 Days',
    id: 'tier-team',
    href: '/sales-bootcamp-registration-page',
    priceMonthly: 'Sales Mastery',
    description:
      'After the Fast Track Sales Bootcamp, you will move into Sales Mastery. These will be smaller group sessions where we will deep dive into the Sandler tactics to have a chance to role-play, brainstorm, and strategize advanced skills. These sessions will include advanced skill-building in prospecting, selling, account management, negotiating, and more. All sessions are interactive and led by live instructors.',
    features: [
      '12 90-Minute Sessions',
      'Six Times Per Year',
      'Tuesdays & Thursdays 2:30-4 PM ET',
      'We offer three separate 90-minute sessions per week, each covering a different topic.',
    ],
  },
];

export default function SalesDetails() {
  return (
    <div className='isolate overflow-hidden bg-slate-900'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Start Dates from
            <br /> January 10 - October 31, 2023
          </p>
        </div>
        <div className='relative mt-6'>
          <p className='mx-auto max-w-3xl text-lg leading-8 text-white/60'>
            This introductory course is designed to give a complete overview of
            the Sandler Selling System concepts as they apply to packaging
            sales, along with actionable steps that you or your team can
            implement from the first day to immediately start to improve
            performance.
          </p>
          <svg
            viewBox='0 0 1208 1024'
            className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
          >
            <ellipse
              cx={604}
              cy={512}
              fill='url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)'
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id='6d1bd035-0dd1-437e-93fa-59d316231eb0'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='flow-root bg-white pb-24 sm:pb-32'>
        <div className='-mt-80'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className='flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/10 sm:p-10'
                >
                  <div>
                    <h3
                      id={tier.id}
                      className='text-base font-semibold leading-7 text-base-mid'
                    >
                      {tier.name}
                    </h3>
                    <div className='mt-4 flex items-baseline gap-x-2'>
                      <span className='text-5xl font-greycliff font-bold tracking-tight text-slate-900'>
                        {tier.priceMonthly}
                      </span>
                    </div>
                    <p className='mt-6 leading-7 text-slate-600'>
                      {tier.description}
                    </p>
                    <ul
                      role='list'
                      className='mt-10 space-y-4 text-sm leading-6 text-slate-600'
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex gap-x-3'>
                          <CheckIcon
                            className='h-6 w-5 flex-none text-slate-600'
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
                    className='mt-8 font-greycliff block rounded-md bg-clemson px-3.5 py-2 text-center font-semibold leading-6 text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Get started today
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
