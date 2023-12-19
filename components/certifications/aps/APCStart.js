import React from 'react';
import FadeIn from '../../../helpers/FadeIn';
import { SectionHeading } from '../../shared/SectionHeading';
import CPSPricing from '../cps/CPSPricing';
import APCPricing from './APCPricing';

const APCStart = () => {
  return (
    <section id='where'>
      <div className='container-7xl flex flex-col gap-6'>
        <FadeIn>
          <APCPricing />
        </FadeIn>
      </div>
    </section>
  );
};

export default APCStart;
