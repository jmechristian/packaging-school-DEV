import React from 'react';
import CertificateCard from '../../components/certificate-card/CertificateCard';
import ScrollButtons from '../../components/ScrollButtons';

const AllCoursesCert = () => {
  return (
    <div className=' flex flex-col gap-6'>
      <div className='flex justify-between items-end'>
        <div className='font-medium text-xl leading-tight '>
          Comprehensive <span className='font-bold'>Certificate Programs</span>
        </div>
        <ScrollButtons />
      </div>
      <div className='relative flex flex-col lg:grid lg:grid-cols-1'>
        <CertificateCard />
      </div>
    </div>
  );
};

export default AllCoursesCert;
