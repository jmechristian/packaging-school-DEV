import React, { useRef } from 'react';
import CertificateCard from '../../components/certificate-card/CertificateCard';
import Scroller from '../../components/Scroller';

const AllCourseCertMobile = () => {
  const certRef = useRef();

  return (
    <div className='flex'>
      <Scroller scroll={certRef} rows='1'>
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </Scroller>
    </div>
  );
};

export default AllCourseCertMobile;
