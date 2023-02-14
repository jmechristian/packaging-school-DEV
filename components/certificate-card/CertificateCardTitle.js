import React from 'react';

const CertificateCardTitle = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='font-greycliff font-extrabold text-xl md:text-2xl xl:text-3xl text-white'>
        Certificate of Mastery in Packaging Management
      </div>
      <div className='hidden lg:block xl:hidden'>
        <div className='text-sm text-slate-200'>
          An online education program that provides proactive learning in the
          space of packaging development, material procurement, and
          organizational management.
        </div>
      </div>
    </div>
  );
};

export default CertificateCardTitle;
