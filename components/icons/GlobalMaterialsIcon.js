import React from 'react';
import MaterialIcon from './MaterialIcon';

const GlobalMaterialsIcon = ({ scale, background }) => {
  return (
    <div
      className={`w-${scale} h-${scale} rounded-full ${background} flex items-center justify-center shadow-lg mb-4`}
    >
      <MaterialIcon
        style={`w-${scale / 2} h-${
          scale / 2
        } stroke-white fill-transparent stroke-2`}
      />
    </div>
  );
};

export default GlobalMaterialsIcon;
