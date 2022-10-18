import React, { useEffect, useRef } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../features/navigation/navigationSlice';

const CertificateDetails = ({ slice }) => {
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
      className='container__inner inner__section-margin flex flex-col lg:flex-row justify-between items-center gap-8 scroll-mt-44'
      id='details'
      ref={sectionRef}
    >
      <div className='flex flex-col gap-6 lg:gap-8 w-full lg:w-7/12'>
        <div className='subheadline'>
          {slice.primary.headline ? (
            <PrismicRichText field={slice.primary.headline} />
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
      <div className='flex flex-col border-t border-gray-500 w-full lg:w-4/12'>
        {slice?.items?.map((item, i) => (
          <div
            key={i}
            className='text-neutral-600 text-lg border-b py-3 border-gray-500 flex justify-start items-center gap-2'
          >
            <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
            <PrismicRichText field={item.icon_text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateDetails;
