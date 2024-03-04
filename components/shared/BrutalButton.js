import React from 'react';

const BrutalButton = ({ link, textColor, background, text, arrow }) => {
  return (
    <a
      href={link}
      className={`flex justify-center items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase ${textColor} transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black] ${background}`}
    >
      <span>{text}</span>
      {arrow}
    </a>
  );
};

export default BrutalButton;
