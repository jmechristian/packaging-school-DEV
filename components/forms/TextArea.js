import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextArea = ({ label, name, required }) => {
  const { register } = useFormContext();

  return (
    <div>
      <div className='flex justify-between'>
        <label
          htmlFor={name}
          className='block font-greycliff font-semibold leading-6 text-slate-900 max-w-lg'
        >
          {label}
        </label>
        <span className='text-sm leading-6 text-red-500' id='email-optional'>
          {required ? 'Required' : ''}
        </span>
      </div>
      <div className='mt-2'>
        <textarea
          {...register(`${name}`, { required: required ? true : false })}
          name={name}
          rows={3}
          id={name}
          className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          aria-describedby={`${name} + ' ' + ${required}`}
        />
      </div>
    </div>
  );
};

export default TextArea;
