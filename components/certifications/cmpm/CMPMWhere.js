import React from 'react';
import FadeIn from '../../../helpers/FadeIn';
import { SectionHeading } from '../../shared/SectionHeading';
import CMPMPricing from './CMPMPricing';

const CMPMWhere = () => {
  return (
    <section id='where'>
      <div className='container-7xl flex flex-col gap-9'>
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

export default CMPMWhere;
