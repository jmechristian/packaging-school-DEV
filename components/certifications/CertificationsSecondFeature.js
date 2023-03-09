import React from 'react';

const CertificationsSecondFeature = ({ darkMode, features }) => {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl md:text-center'>
        <h2 className='text-lg font-bold leading-7 text-base-brand font-greycliff'>
          Why This Certificate?
        </h2>
        <p className='mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-5xl font-greycliff'>
          Enhance Your Skills and Boost Your Career
        </p>
        <p className='mt-6 text-lg lg:text-xl lg:leading-9 leading-8 text-slate-500 dark:text-gray-300'>
          Separate yourself from your peers with a comprehensive certificate and
          learn the science, technology, art, language, math, and business of
          packaging in one expert-led package.
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name} className='flex flex-col'>
              <dt className='text-base md:text-lg font-bold leading-7 dark:text-white'>
                <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-base-mid'>
                  <feature.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-1 flex flex-auto flex-col text-base md:text-lg md:leading-8 leading-7 text-slate-500 dark:text-gray-300'>
                <p className='flex-auto'>{feature.description}</p>
                <p className='mt-6'>
                  <a
                    href={feature.href}
                    className='text-lg font-bold leading-6 text-base-brand'
                  >
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CertificationsSecondFeature;
