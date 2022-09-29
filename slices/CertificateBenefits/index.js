import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const CertificateBenefits = ({ slice }) => (
  <section
    className='container__inner flex flex-col mt-40 xl:mt-52 gap-12 w-full md:w-4/5 lg:w-full'
    id='benefits'
  >
    <div className='flex flex-col gap-3 lg:text-center'>
      <div className='subheadline'>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </div>
      <div className='body__text'>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
      </div>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-x-4 gap-y-6'>
      {slice?.items?.map((item, i) => (
        <div
          key={i}
          className='bg-base-light px-6 xl:px-8 pt-10 pb-16 content__box'
        >
          <div className='flex flex-col gap-4'>
            <div className='w-12 h-12 rounded-full bg-base-dark '>
              <div className='flex justify-center items-center box-border p-3'>
                <img
                  src={item.icon.url}
                  alt={item.icon.alt}
                  className='w-full'
                />
              </div>
            </div>
            <div className='font-semibold text-lg'>
              <PrismicRichText field={item.benefit_title} />
            </div>
            <div className='body__text'>
              <PrismicRichText field={item.benefit_text} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CertificateBenefits;
