import React from 'react';

const ReactHookInput = ({
  display,
  name,
  type,
  fn,
  errors,
  register,
  required,
  placeholder,
}) => {
  return (
    <div>
      <div className='w-full flex items-center justify-between'>
        <label
          htmlFor={name}
          className='block text-sm font-medium leading-6 text-neutral-900'
        >
          {display}
        </label>
        {required ? (
          <div className='text-xs uppercase text-red-600'>Required</div>
        ) : (
          <></>
        )}
      </div>
      <div className='mt-2'>
        <input
          {...register(name, { required: required })}
          type={type ? type : 'text'}
          name={name}
          id={name}
          className='block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder={placeholder}
        />
      </div>
      <div className='mt-1'>
        {errors[name] && (
          <span className='text-xs text-red-600'>This field is required</span>
        )}
      </div>
    </div>
  );
};

export default ReactHookInput;
