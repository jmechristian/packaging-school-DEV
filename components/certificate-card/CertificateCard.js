import React from 'react';
import CertificateCardDetails from '../../components/certificate-card/CertificateCardDetails';
import CertificateCardImage from '../../components/certificate-card/CertificateCardImage';
import CertificateCardTitle from '../../components/certificate-card/CertificateCardTitle';

const CertificateCard = () => {
  return (
    <div className='bg-cmpm-cert bg-cover rounded-md drop-shadow-lg w-72 md:w-96 lg:w-full snap-start cursor-grab'>
      <div className='grid grid-cols-12 w-full py-6 px-4 lg:px-6 xl:px-10 gap-5 xl:gap-8 items-center'>
        <div className='col-span-4 hidden lg:block'>
          <CertificateCardImage />
        </div>
        <div className=' col-span-12 lg:col-span-8'>
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
  );
};

export default CertificateCard;
