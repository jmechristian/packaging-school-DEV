import React from 'react';
import Image from 'next/image';

const CertificateCardImage = () => {
  return (
    <div>
      <Image
        src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1667246756/pschool/cmpm_fw32jf.png'
        width='848'
        height='909'
        layout='responsive'
        alt='Certificate of Mastery in Packaging Management'
      />
    </div>
  );
};

export default CertificateCardImage;
