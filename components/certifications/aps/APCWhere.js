import React from 'react';
import FadeIn from '../../../helpers/FadeIn';
import { SectionHeading } from '../../shared/SectionHeading';
import CMPMPricing from './CMPMPricing';

const APCPricing = () => {
  return (
    <section id='where'>
      <div className='container-7xl py-32 flex flex-col gap-9'>
        <FadeIn>
          <SectionHeading number='3'>Where do I start?</SectionHeading>
        </FadeIn>
        <FadeIn>
          <CMPMPricing />
        </FadeIn>
      </div>
    </section>
  );
};

export default APCPricing;
