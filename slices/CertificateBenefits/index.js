import React, { useRef, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../store/navigation/navigationSlice';

const CertificateBenefits = ({ slice }) => {
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
      className='container__inner flex flex-col inner__section-margin gap-12 scroll-mt-32'
      id='benefits'
      ref={sectionRef}
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
};

export default CertificateBenefits;
