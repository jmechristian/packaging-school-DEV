import React, { useEffect, useRef } from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../store/navigation/navigationSlice';

const CertificateResources = ({ slice }) => {
  const dispatch = useDispatch();
  const sectionRef = useRef();
  const sectionInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    if (sectionInView) {
      dispatch(setSectionInView(sectionRef.current.id));
    } else {
      return;
    }
  }, [sectionInView, dispatch]);

  return (
    <section
      className='bg-base-dark scroll-mt-16 lg:scroll-mt-24'
      id='resources'
      ref={sectionRef}
    >
      <div className='container__inner dark__inner flex flex-col gap-12 lg:gap-16'>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-x-8 gap-y-10 items-center'>
          <div className='col-span-1 aspect-video'>
            <div
              dangerouslySetInnerHTML={{
                __html: slice.primary.video[0].text,
              }}
            ></div>
          </div>
          <div className='col-span-1 lg:pl-6'>
            <div className='flex flex-col gap-4'>
              {slice?.items?.map((item, i) => (
                <div
                  className='flex gap-2 items-center border-b border-b-base-brand pb-4'
                  key={i}
                >
                  <ArrowTopRightOnSquareIcon className='w-4 h-4 lg:w-5 lg:h-5 stroke-clemson' />
                  <PrismicLink
                    field={item.resource_src}
                    className='text-base text-white font-semibold lg:text-lg'
                  >
                    {item.resource_name}
                  </PrismicLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center bg-base-light rounded px-6 py-6 gap-4 lg:gap-6 lg:px-8'>
          <div className='flex flex-col gap-2 lg:w-3/5 lg:pr-6'>
            <div className='font-bold text-clemson-dark text-2xl'>
              <PrismicRichText
                field={slice.primary.resource_salesbar_headline}
              />
            </div>
            <div className='body__text'>
              <PrismicRichText field={slice.primary.resource_salesbar_copy} />
            </div>
          </div>
          <button className='bg-base-dark hover:bg-base-mid rounded-md py-5 lg:w-2/5'>
            <PrismicLink field={slice.primary.resource_salebar_button_link}>
              <div className='text-white font-bold uppercase lg:text-xl'>
                {slice.primary.resource_salesbar_button_cta}
              </div>
            </PrismicLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificateResources;
