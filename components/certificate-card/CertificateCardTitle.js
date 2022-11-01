import React from 'react';

const CertificateCardTitle = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2'>
        <div className='bg-base-brand rounded py-1 px-2 text-xs font-semibold text-white'>
          PhD-Led
        </div>
      </div>
      <div className='font-plex font-extrabold text-xl md:text-2xl lg:text-3xl text-white'>
        Certificate of Mastery in Packaging Management
      </div>
    </div>
  );
};

export default CertificateCardTitle;
