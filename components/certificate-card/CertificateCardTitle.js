import React from 'react';

const CertificateCardTitle = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2'>
        <div className='bg-base-brand rounded py-1 px-2 text-xs font-semibold text-white'>
          PhD-Led
        </div>
        <div className='bg-blue-600 rounded py-1 px-2 text-xs font-semibold text-white'>
          Deadline to Register: Nov 21
        </div>
      </div>
      <div className='font-plex font-extrabold text-3xl text-white'>
        Certificate of Mastery in Packaging Management
      </div>
    </div>
  );
};

export default CertificateCardTitle;
