import React, { useEffect, useRef } from 'react';
import { PrismicRichText } from '@prismicio/react';
import EnrollmentCalendar from './components/EnrollmentCalendar';
import EnrollmentDetails from './components/EnrollmentDetails';
import SalesBar from './components/SalesBar';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../features/navigation/navigationSlice';

const CertificateEnrollment = ({ slice }) => {
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
      className='inner__section-margin container__inner scroll-mt-28 lg:scroll-mt-40 flex flex-col gap-10 lg:gap-16'
      id='enrollment'
      ref={sectionRef}
    >
      <div className='flex flex-col gap-3'>
        <div className='subheadline'>
          {slice.primary.title && (
            <PrismicRichText field={slice.primary.title} />
          )}
        </div>
        <div className='body__text'>
          {slice.primary.description && (
            <PrismicRichText field={slice.primary.description} />
          )}
        </div>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-5 gap-y-16 lg:gap-x-12 lg:justify-between'>
        <div className='col-span-1 lg:col-span-2'>
          <EnrollmentDetails items={slice?.items} price={slice.primary.price} />
        </div>
        <div className='col-span-1 lg:col-span-3 lg:pl-16'>
          <EnrollmentCalendar />
        </div>
      </div>
      <SalesBar />
    </section>
  );
};

export default CertificateEnrollment;
