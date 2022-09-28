import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';

const CertificateDetails = ({ slice }) => (
  <section className='container__inner mt-16 flex flex-col lg:flex-row justify-between items-center gap-8 w-full md:w-4/5 lg:w-full'>
    <div className='flex flex-col gap-6 lg:gap-8 w-full lg:w-7/12'>
      <div className='font-extrabold text-3xl lg:text-4xl'>
        {slice.primary.headline ? (
          <PrismicRichText field={slice.primary.headline} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </div>
      <div className='text-neutral-600 text-base lg:text-lg leading-relaxed'>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
      </div>
    </div>
    <div className='flex flex-col border-t border-gray-500 w-full lg:w-4/12'>
      {slice?.items?.map((item, i) => (
        <div
          key={i}
          className='text-neutral-600 text-base lg:text-lg font-medium border-b py-3 border-gray-500 flex justify-start items-center gap-2'
        >
          <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
          <PrismicRichText field={item.icon_text} />
        </div>
      ))}
    </div>
  </section>
);

export default CertificateDetails;
