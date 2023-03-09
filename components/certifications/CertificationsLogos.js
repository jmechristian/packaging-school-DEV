import React from 'react';

const CertificationsLogos = ({ darkMode }) => {
  return (
    <div className='mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8 bg-base-dark dark:bg-transparent rounded-none md:rounded-lg py-12'>
      <h2 className='text-center text-lg font-semibold leading-8 text-white'>
        Top Companies{' '}
        <span className='text-base-brand'>Trust The Packaging School</span> for
        In-Demand Skills
      </h2>
      <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
        <img
          className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg'
          alt='Transistor'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/reform-logo-white.svg'
          alt='Reform'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg'
          alt='Tuple'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
          alt='SavvyCal'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg'
          alt='Statamic'
          width={158}
          height={48}
        />
      </div>
    </div>
  );
};

export default CertificationsLogos;
