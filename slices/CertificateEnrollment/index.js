import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import EnrollmentCalendar from './components/EnrollmentCalendar';
import EnrollmentDetails from './components/EnrollmentDetails';
import SalesBar from './components/SalesBar';

const CertificateEnrollment = ({ slice }) => (
  <section
    className='inner__section-margin container__inner scroll-mt-28 flex flex-col gap-12'
    id='enrollment'
  >
    <div className='flex flex-col gap-3'>
      <div className='subheadline'>
        {slice.primary.title && <PrismicRichText field={slice.primary.title} />}
      </div>
      <div className='body__text'>
        {slice.primary.description && (
          <PrismicRichText field={slice.primary.description} />
        )}
      </div>
    </div>
    <div className='grid grid-col-1 lg:grid-cols-5 gap-y-12 lg:gap-x-12 lg:justify-between'>
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

export default CertificateEnrollment;
