import React from 'react';
import CertificateHero from '../components/certifications/cmpm/CertificateHero';
import CertificateAbout from '../components/certifications/cmpm/CertificateAbout';
import CertificateWhat from '../components/certifications/cmpm/CertificateWhat';
import CertificateNavigation from '../components/certifications/cmpm/CertificateNavigation';
import CMPMHow from '../components/certifications/cmpm/CMPMHow';
import CMPMReviews from '../components/forms/cmpm/CMPMReviews';
import CMPMWhere from '../components/forms/cmpm/CMPMWhere';
import CMPMApply from '../components/forms/cmpm/CMPMApply';

const Sandbox = () => {
  return (
    <div className='flex flex-col dark:bg-dark-dark'>
      <CertificateHero />
      <CertificateNavigation />
      <CertificateAbout />
      <CertificateWhat />
      <CMPMHow />
      <CMPMWhere />
      <CMPMReviews />
      <CMPMApply />
    </div>
  );
};

export default Sandbox;
