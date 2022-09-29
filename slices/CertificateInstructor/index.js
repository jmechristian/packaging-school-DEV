import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const CertificateInstructor = ({ slice }) => (
  <section className='inner__section__margin relative container__inner'>
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col gap-3'>
        <div className='subheadline'>
          {slice && <PrismicRichText field={slice.primary.title} />}
        </div>
        <div className='body__text'>
          {slice && <PrismicRichText field={slice.primary.description} />}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 lg:gap-0 w-full'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/4'>
          <div
            className='rounded-tr-3xl h-80 md:h-60 lg:h-80'
            style={{
              backgroundImage: `url(${slice.primary.instructor_headshot.url})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className='bg-base-dark text-white flex flex-row justify-between items-center py-3 px-6'>
            <div className='flex flex-col'>
              <div className='font-bold text-xl'>
                {slice && slice.primary.instructor_name}
              </div>
              <div>{slice && slice.primary.instructor_title}</div>
            </div>
            <div className='h-7 w-7'>
              <PrismicLink field={slice.primary.instructor_social_link}>
                <img
                  src={slice.primary.instructor_social.url}
                  alt={slice.primary.instructor_social.alt}
                />
              </PrismicLink>
            </div>
          </div>
        </div>
        <div className='body__text w-full lg:w-3/4 lg:pl-16 max-w-prose'>
          <PrismicRichText field={slice.primary.instructor_bio} />
        </div>
      </div>
    </div>
  </section>
);

export default CertificateInstructor;
