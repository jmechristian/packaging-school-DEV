import React from 'react';

const BrutalTag = ({ backgroundColor, textColor, text }) => {
  return (
    <div
      className={`${backgroundColor} border-black border-2 ${textColor} font-bold px-4 py-2 rounded-lg w-fit shadow-[4px_4px_0px_black] lg:text-lg`}
    >
      {text}
    </div>
  );
};

export default BrutalTag;
