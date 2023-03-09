import React from 'react';

const CertificationsFeatureStats = ({ darkMode, stats }) => {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-base font-bold leading-7 text-base-brand font-greycliff'>
            Elevate Your Career
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight dark:text-white md:text-5xl font-greycliff'>
            Who Enrolls?
          </p>
          <p className='mt-6 text-lg lg:text-xl leading-8 lg:leading-9 text-slate-500 dark:text-gray-300'>
            Brand Managers, Graphic Designers… CPGs, Packaging Suppliers,
            Retailers… with less than one year experience up to 40+ years in the
            business… if you have any contact with the packaging process, our
            program will raise your packaging IQ.{' '}
            <i>Admission is by application only.</i>
          </p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <img
            src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
            alt='App screenshot'
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10'
            width={2432}
            height={1442}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white dark:from-gray-900 pt-[7%]' />
          </div>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 dark:text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col gap-y-3 border-l border-slate-900 dark:border-white/10 pl-6'
            >
              <dt className='text-sm leading-6'>{stat.name}</dt>
              <dd className='order-first text-5xl font-greycliff font-bold tracking-tight'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CertificationsFeatureStats;
