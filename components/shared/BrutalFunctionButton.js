import React from 'react';

const BrutalFunctionButton = ({
  fn,
  textColor,
  background,
  text,
  arrow,
  small,
}) => {
  return (
    <div
      onClick={() => fn()}
      className={`flex justify-center border-2 border-black items-center gap-2 px-4 py-2 font-medium uppercase ${textColor} transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg shadow-[2px_2px_0px_black] hover:shadow-[5px_5px_0px_black] ${background}`}
    >
      <span className={`font-semibold ${small ? 'text-sm' : 'text-base'}`}>
        {text}
      </span>
      {arrow}
    </div>
  );
};

export default BrutalFunctionButton;
