import React from 'react';

const ReactHookTextArea = ({
  display,
  name,
  register,
  required,
  placeholder,
  errors,
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
        <textarea
          {...register(name, { required: required })}
          rows={4}
          name={name}
          id={name}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          defaultValue={''}
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

export default ReactHookTextArea;
