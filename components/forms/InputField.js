import React from 'react';
import { useForm } from 'react-hook-form';

const InputField = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label htmlFor='firstName' className='sr-only'>
        First Name
      </label>
      <input
        {...register('firstName', { required: true })}
        type='text'
        name='firstName'
        id='firstName'
        className='bg-base-light block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6'
        placeholder='First Name*'
      />
      {errors.firstName?.type === 'required' && (
        <p role='alert' className='text-red-500 text-sm mt-2'>
          <sup>*</sup>Field Required
        </p>
      )}
    </div>
  );
};

export default InputField;
