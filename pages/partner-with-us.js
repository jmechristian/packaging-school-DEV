import React from 'react';
import PatternBackground from '../components/layout/PatternBackground';
import MultiImageHero from '../components/MultiImageHero';
import PartnerBottom from '../components/parnter/PartnerBottom';

const Index = () => {
  return (
    <div>
      <PatternBackground />
      <MultiImageHero
        headline='Are You Ready To Work Together?'
        subheadline='Empower Your Workforce: Collaborate with a Versatile Online Education Partner for Tailored Learning Solutions, Professional Development, and Hands-On Training Opportunities. Scroll down for more info.'
      />
      <PartnerBottom />
    </div>
  );
};

export default Index;
