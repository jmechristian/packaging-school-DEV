import React, { useRef } from 'react';
import CertificateCard from '../../components/certificate-card/CertificateCard';
import Scroller from '../../components/Scroller';

const AllCourseCertMobile = () => {
  const certRef = useRef();

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-2xl font-semibold font-greycliff dark:text-slate-400 leading-tight col-span-4 container__inner mb-2'>
        Certificate Programs
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
