import React, { useState } from 'react';

const BrutalIcon = ({ children, bgColor, fn }) => {
  return (
    <div>
      <div
        className={`${
          bgColor ? bgColor : 'bg-white'
        } relative cursor-pointer w-10 h-10 border border-black rounded-full transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 flex items-center justify-center`}
        onClick={fn}
      >
        {children}
      </div>
    </div>
  );
};

export default BrutalIcon;
