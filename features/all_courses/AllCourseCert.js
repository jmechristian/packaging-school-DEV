import React from 'react';
import CertificateCard from '../../components/certificate-card/CertificateCard';
import ScrollButtons from '../../components/ScrollButtons';

const AllCoursesCert = () => {
  return (
    <div className=' flex flex-col gap-6'>
      <div className='flex justify-between items-end'>
        <div className='font-medium text-2xl font-greycliff dark:text-white'>
          Find Your<span className='font-bold'>&nbsp;Learning Path</span>
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
