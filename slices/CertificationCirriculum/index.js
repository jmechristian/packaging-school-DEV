import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const CertificationCirriculum = ({ slice }) => {
  return (
    <section className='bg-base-dark dark__section__margin'>
      <div className='container__inner flex flex-col py-16 lg:py-24 gap-12'>
        <div className='flex flex-col gap-3'>
          <div className='subheadline text-white'>
            {slice.primary.title ? (
              <PrismicRichText field={slice.primary.title} />
            ) : (
              <h2></h2>
            )}
          </div>
          <div className='body__text__light'>
            {slice.primary.description ? (
              <PrismicRichText field={slice.primary.description} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-4'>
          {slice?.items?.map((item, i) => (
            <div key={i} className='bg-base-mid px-6 md:px-8 py-8 rounded'>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col md:flex-row flex-wrap gap-2'>
                  <div className='bg-clemson rounded-lg w-fit flex items-center justify-center'>
                    <div className='text-white text-xs py-1 px-3 uppercase font-semibold'>
                      {item.week}
                    </div>
                  </div>
                  <div className='font-semibold text-lg lg:text-xl text-white'>
                    <PrismicRichText field={item.week_title} />
                  </div>
                </div>
                <div className='body__text text-base-light'>
                  <PrismicRichText field={item.week_description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificationCirriculum;
