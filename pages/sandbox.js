import React from 'react';
import CertificateHero from '../components/certifications/cmpm/CertificateHero';
import CertificateWho from '../components/certifications/cmpm/CertificateWho';
import CertificateWhat from '../components/certifications/cmpm/CertificateWhat';
import CertificateNavigation from '../components/certifications/cmpm/CertificateNavigation';

const Sandbox = () => {
  return (
    <div className='flex flex-col dark:bg-dark-dark'>
      <CertificateHero />
      <CertificateWhat />
      <CertificateNavigation />
      <CertificateWho />
    </div>
  );
};

export default Sandbox;
