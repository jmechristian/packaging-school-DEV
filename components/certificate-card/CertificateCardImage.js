import React from 'react';
import Image from 'next/image';

const CertificateCardImage = () => {
  return (
    <div>
      <Image
        src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1667248539/pschool/cmpm_yfc0za.png'
        width='806'
        height='886'
        layout='responsive'
        alt='Certificate of Mastery in Packaging Management'
      />
    </div>
  );
};

export default CertificateCardImage;
