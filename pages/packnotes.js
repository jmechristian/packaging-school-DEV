import React from 'react';
import PatternBackground from '../components/layout/PatternBackground';
import MultiImageHero from '../components/MultiImageHero';
import PacknotesBottom from '../components/packnotes/PacknotesBottom';

const Index = () => {
  return (
    <div className='relative isolate bg-white'>
      <PatternBackground />
      <MultiImageHero
        headline='PackNotes'
        subheadline='Complete the form below telling us how you’ll use your PackNotes™, and we’ll drop one in the mail for you!'
      />
      <PacknotesBottom />
    </div>
  );
};

export default Index;
