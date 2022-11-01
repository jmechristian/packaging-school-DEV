import React, { useRef } from 'react';
import CertificateCard from '../../components/certificate-card/CertificateCard';
import Scroller from '../../components/Scroller';

const AllCourseCertMobile = () => {
  const certRef = useRef();

  return (
    <div className='flex flex-col gap-4'>
      <div className='font-medium text-lg leading-tight col-span-4 container__inner'>
        Comprehensive <span className='font-bold'>Certificate Programs</span>
      </div>
      <Scroller scroll={certRef} rows='1'>
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </Scroller>
    </div>
  );
};

export default AllCourseCertMobile;
