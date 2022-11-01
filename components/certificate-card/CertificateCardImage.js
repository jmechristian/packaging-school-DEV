import React from 'react';
import Image from 'next/image';

const CertificateCardImage = () => {
  return (
    <div>
      <Image
        src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1667311472/pschool/cmpm_uhx6iz.png'
        width='855'
        height='963'
        layout='responsive'
        alt='Certificate of Mastery in Packaging Management'
      />
    </div>
  );
};

export default CertificateCardImage;
