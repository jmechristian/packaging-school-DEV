import React from 'react';
import PatternBackground from '../components/layout/PatternBackground';
import MultiImageHero from '../components/MultiImageHero';
import PartnerBottom from '../components/parnter/PartnerBottom';

const Index = () => {
  return (
    <div className='relative isolate bg-white'>
      <PatternBackground />
      <MultiImageHero />
      <PartnerBottom />
    </div>
  );
};

export default Index;
