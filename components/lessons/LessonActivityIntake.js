import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

const LessonActivityIntake = ({ toggleSubmit, title }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const subscribeFormHandler = async (data) => {
    setIsSending(true);
    // gtag('event', 'resource_click', {
    //   resource: 'resource_download',
    //   lesson: title,
    // });
    const formData = new FormData(formRef.current);

    // Hidden field key/values.
    formData.append('u', '88');
    formData.append('f', '88');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', 'd5ea8e7b9c87b88dac73d0042fd47276');

    formData.append('firstname', data.firstName);
    formData.append('lastname', data.lastName);
    formData.append('email', data.email);

    try {
      const sendEmail = await fetch(
        'https://packagingschool42200.activehosted.com/proc.php',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
      console.log(sendEmail);
      setIsSending(false);
      toggleSubmit(true);
      setHasSubmitted(true);
    } catch (err) {
      console.log('Request failed', err);
    }
  };

  return (
    <form
      className='w-full grid grid-cols-6 gap-4 pt-6 pb-2'
      onSubmit={handleSubmit(subscribeFormHandler)}
      ref={formRef}
    >
      <div className='col-span-6 sm:col-span-3'>
        <input
          {...register('firstName')}
          type='text'
          name='firstName'
          id='firstName'
          autoComplete='firstName'
          placeholder='First Name (optional)'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
        <div>
          {errors.firstName && (
            <p role='alert' className='text-sm text-red-700 mt-1'>
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className='col-span-6 sm:col-span-3'>
        <input
          {...register('lastName')}
          placeholder='Last Name (optional)'
          type='text'
          name='lastName'
          id='lastName'
          autoComplete='family-name'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
        <div>
          {errors.lastName && (
            <p role='alert' className='text-sm text-red-700 mt-1'>
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className='col-span-6'>
        <input
          {...register('email')}
          placeholder='Email (optional)'
          type='text'
          name='email'
          id='email'
          autoComplete='email'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
        <div>
          {errors.lastName && (
            <p role='alert' className='text-sm text-red-700 mt-1'>
              This field is required
            </p>
          )}
        </div>
        <div className='mt-5 sm:mt-6'>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 md:text-xl'
          >
            {!hasSubmitted ? (
              <div>{isSending ? 'Calculating...' : 'Get Your Resource'}</div>
            ) : (
              'Submitted!'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LessonActivityIntake;
