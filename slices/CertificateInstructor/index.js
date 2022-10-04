import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import InstructorHeadshot from './components/InstructorHeadshot';
import InstructorBio from './components/InstructorBio';

const CertificateInstructor = ({ slice }) => (
  <section
    className='inner__section-margin container__inner scroll-mt-28'
    id='instructor'
  >
    <div className='flex flex-col gap-12 lg:gap-16'>
      <div className='flex flex-col gap-3'>
        <div className='subheadline'>
          {slice && <PrismicRichText field={slice.primary.title} />}
        </div>
        <div className='body__text'>
          {slice && <PrismicRichText field={slice.primary.description} />}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 w-full'>
        {slice && (
          <InstructorHeadshot
            name={slice.primary.instructor_name}
            title={slice.primary.instructor_title}
            headshot={slice.primary.instructor_headshot.url}
            social_alt={slice.primary.instructor_social.alt}
            social_image={slice.primary.instructor_social.url}
            social_link={slice.primary.instructor_social_link}
          />
        )}
        {slice && (
          <InstructorBio bio={slice.primary.instructor_bio} slice={slice} />
        )}
      </div>
    </div>
  </section>
);

export default CertificateInstructor;
