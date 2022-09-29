import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const CertificateBenefits = ({ slice }) => (
  <section className='container__inner flex flex-col mt-32 gap-6' id='benefits'>
    <div className='flex flex-col gap-6'>
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
    <div className='flex flex-col gap-6'>
      {slice?.items?.map((item, i) => (
        <div key={i} className='bg-base-light px-6 pt-10 pb-12 rounded-br-3xl'>
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
