import React from 'react';

const BrutalButton = ({ link, textColor, background, text, arrow, small }) => {
  return (
    <a
      href={link}
      className={`flex justify-center border-2 border-black items-center gap-2 px-4 py-3 font-medium uppercase ${textColor} transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg shadow-[2px_2px_0px_black] hover:shadow-[5px_5px_0px_black] ${background}`}
    >
      <span className={`font-semibold ${small ? 'text-sm' : 'text-base'}`}>
        {text}
      </span>
      {arrow}
    </a>
  );
};

export default BrutalButton;
