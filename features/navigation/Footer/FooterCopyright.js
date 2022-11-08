import React from 'react';
import Image from 'next/image';

const FooterCopyright = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='grid grid-cols-12 gap-4 overflow-hidden'>
        <div className='col-span-3'>
          <Image
            src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1667941998/pschool/packagingschool_logo_square-orange_d7dbzg.svg'
            alt='The Packaging School Logo'
            height='1121'
            width='1078'
            layout='responsive'
          />
        </div>
        <div className='flex flex-col gap-2 col-span-9'>
          <div className='text-slate-300 text-xs'>
            South Carolina Commission on Higher Education License #5400
          </div>
          <div className='text-slate-500 text-xs'>
            Copyright © 2015-2022 The Packaging School, LLC. All Rights
            Reserved.
          </div>
        </div>
      </div>
      <div className='flex gap-3 text-xs text-slate-500'>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

export default FooterCopyright;
