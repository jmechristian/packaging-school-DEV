import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const TopCompanies = ({ slice }) => (
  <section className='bg-base-dark container__inner md:rounded'>
    <div className='flex flex-col py-10 px-6 gap-6'>
      <div className='text-center font-semibold text-white text-xl'>
        Top companies choose the{' '}
        <span className='text-clemson'>Packaging School</span> to build
        in-demand skills.
      </div>
      <div className='flex flex-row justify-center flex-nowrap overflow-auto gap-16'>
        {slice?.items?.map((item, i) => (
          <img
            src={item.logo.url}
            alt={item.logo.alt}
            className='w-28'
            key={i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TopCompanies;
