import React from 'react';

const TextInputSolo = ({ id, defaultVal, changeHandler }) => {
  return (
    <input
      id={id}
      name={id}
      {...register(id, { required: true })}
      className='block w-full rounded-md border-0 py-2 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
      defaultValue={defaultVal}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
};

export default TextInputSolo;
