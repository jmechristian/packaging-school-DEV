import React from 'react';
import Link from 'next/link';

const FooterCerts = () => {
  return (
    <div className='flex flex-col gap-1.5 lg:gap-2 text-sm'>
      <div className='font-extrabold text-sm uppercase tracking-widest text-slate-200 font-plex'>
        Certifications
      </div>
      <Link href={'/certifications/cmpm'}>
        <p className='text-slate-500 cursor-pointer'>
          Certificate of Mastery in Packaging Management
        </p>
      </Link>
      <p className='text-slate-500'>Certificate of Packaging Science</p>
      <p className='text-slate-500'>Automotive Packaging Certificate</p>
    </div>
  );
};

export default FooterCerts;
