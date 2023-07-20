import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const DoctorForm = ({ close }) => {
  const [isFullName, setIsFullName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isMessage, setIsMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-6 grid grid-cols-1 gap-6'
    >
      <input
        id='fullName'
        name='fullName'
        {...register('fullName', { required: true })}
        className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
        defaultValue={isFullName}
        onChange={(e) => setIsFullName(e.target.value)}
        placeholder='Full Name*'
      />

      <input
        id='email'
        name='email'
        {...register('email', { required: true })}
        className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
        defaultValue={isEmail}
        onChange={(e) => setIsEmail(e.target.value)}
        placeholder='Email*'
      />
      <input
        id='phone'
        name='phone'
        {...register('phone', { required: true })}
        className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
        defaultValue={isPhone}
        onChange={(e) => setIsPhone(e.target.value)}
        placeholder='Phone*'
      />
      <textarea
        id='message'
        name='message'
        {...register('message', { required: true })}
        defaultValue={isMessage}
        onChange={(e) => setIsMessage(e.target.value)}
        rows={4}
        placeholder='Your message to Dr. Suggs*'
        className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
      />
      <div className='grid grid-cols-2 gap-6'>
        <div
          className='cursor-pointer w-full py-2 text-center font-semibold border border-gray-500 text-gray-500 rounded-lg text-lg'
          onClick={() => close()}
        >
          Cancel
        </div>
        <button
          type='submit'
          className='w-full py-2 text-center font-semibold bg-clemson hover:bg-clemson-dark text-white rounded-lg text-lg'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DoctorForm;
