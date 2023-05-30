import React from 'react';
import CertIcon from './CertIcon';

const CMPMIcon = ({ scale, background }) => {
  return (
    <div
      className={`w-${scale} h-${scale} rounded-full ${background} flex items-center justify-center shadow-lg mb-4`}
    >
      <CertIcon
        className={`w-${scale / 2} h-${
          scale / 2
        } stroke-white fill-transparent stroke-2`}
      />
    </div>
  );
};

export default CMPMIcon;
