import React from 'react';
import CertificateCardDetails from '../../components/certificate-card/CertificateCardDetails';
import CertificateCardImage from '../../components/certificate-card/CertificateCardImage';
import CertificateCardTitle from '../../components/certificate-card/CertificateCardTitle';

const AllCoursesCert = () => {
  return (
    <div className=' flex flex-col gap-6'>
      <div className='font-medium text-xl leading-tight'>
        Comprehensive <span className='font-bold'>Certificate Programs</span>
      </div>
      <div className='relative flex flex-col lg:grid lg:grid-cols-1'>
        <div className='bg-dark-lg bg-cover w-full rounded-md drop-shadow-lg'>
          <div className='grid grid-cols-12 w-full py-4 px-6 xl:py-6 xl:px-10 gap-8 items-center'>
            <div className='col-span-3 xl:col-span-4'>
              <CertificateCardImage />
            </div>
            <div className='col-span-9 xl:col-span-8'>
              <div className='flex flex-col gap-4'>
                <CertificateCardTitle />
                <div className='hidden xl:block'>
                  <CertificateCardDetails />
                </div>
              </div>
            </div>
            <div className='col-span-12 xl:hidden'>
              <CertificateCardDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesCert;
