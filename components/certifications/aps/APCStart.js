import React from 'react';
import FadeIn from '../../../helpers/FadeIn';
import { SectionHeading } from '../../shared/SectionHeading';
import CPSPricing from '../cps/CPSPricing';
import APCPricing from './APCPricing';

const APCStart = () => {
  return (
    <section id='where'>
      <div className='container-7xl py-32 flex flex-col gap-6'>
        <FadeIn>
          <SectionHeading number='3'>Where do I start?</SectionHeading>
        </FadeIn>
        <FadeIn>
          <APCPricing />
        </FadeIn>
      </div>
    </section>
  );
};

export default APCStart;
