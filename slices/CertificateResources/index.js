import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const CertificateResources = ({ slice }) => {
  return (
    <section
      className='bg-base-dark dark__section__margin scroll-mt-24'
      id='resources'
    >
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
        <div className='grid grid-cols-1 gap-y-10 w-full aspect-video'>
          <div
            dangerouslySetInnerHTML={{
              __html: slice.primary.video[0].text,
            }}
            className='col-span-1'
          ></div>
          <div className='col-span-1'>
            <div className='flex flex-col gap-4'>
              {slice?.items?.map((item, i) => (
                <div
                  className='flex gap-2 items-center border-b border-b-base-brand pb-4'
                  key={i}
                >
                  <ArrowTopRightOnSquareIcon className='w-4 h-4 stroke-clemson' />
                  <PrismicLink
                    field={item.resource_src}
                    className='text-base text-white font-semibold'
                  >
                    {item.resource_name}
                  </PrismicLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CertificateResources;
