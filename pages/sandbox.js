import React from 'react';
import CertificateHero from '../components/certifications/cmpm/CertificateHero';
import CertificateAbout from '../components/certifications/cmpm/CertificateAbout';
import CertificateWhat from '../components/certifications/cmpm/CertificateWhat';
import CertificateNavigation from '../components/certifications/cmpm/CertificateNavigation';

const Sandbox = () => {
  return (
    <div className='flex flex-col dark:bg-dark-dark'>
      <CertificateHero />
      <CertificateWhat />
      <CertificateNavigation />
      <CertificateAbout />
    </div>
  );
};

export default Sandbox;
