import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const ClassPackForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setError] = useState(false);

  const formRef = useRef(null);

  const onSubmit = async (data) => {
    setIsSending(true);
    // gtag('event', 'resource_click', {
    //   resource: 'resource_download',
    //   lesson: title,
    // });
    const formData = new FormData(formRef.current);

    // Hidden field key/values.
    formData.append('u', '97');
    formData.append('f', '97');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', '7545524426e898e1d256d9d5b3e9e79b');

    formData.append('fullname', data.fullname);
    formData.append('email', data.email);
    formData.append('field[91]', data.field[91]);
    formData.append('field[94]', data.field[94]);
    formData.append('field[92]', data.field[92]);
    formData.append('field[93]', data.field[93]);

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
      setIsSubmitted(true);
    } catch (err) {
      console.log('Request failed', err);
      setIsSending(false);
      setError(true);
    }
  };

  return (
    <form
      className='flex flex-col gap-3 lg:gap-6 px-4 lg:px-0 max-w-2xl mx-auto w-full h-full pt-6 pb-6 lg:pb-12'
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
    >
      <div className='grid lg:grid-cols-2 gap-6 overflow-hidden'>
        <div>
          <label
            htmlFor='fullname'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Full Name*
          </label>
          <div className='mt-2'>
            <input
              {...register('fullname', { required: true })}
              type='text'
              name='fullname'
              id='fullname'
              className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email*
          </label>
          <div className='mt-2'>
            <input
              {...register('email', { required: true })}
              type='email'
              name='email'
              id='email'
              className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor='field[91]'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Educational Facility*
        </label>
        <div className='mt-2'>
          <input
            {...register('field[91]', { required: true })}
            type='text'
            name='field[91]'
            id='field[91]'
            className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='field[94]'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Facility Mailing Address*
        </label>
        <div className='mt-2'>
          <input
            {...register('field[94]', { required: true })}
            type='text'
            name='field[94]'
            id='field[94]'
            className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-6 overflow-hidden'>
        <div>
          <label
            htmlFor='field[92]'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Number of Students*
          </label>
          <div className='mt-2'>
            <input
              {...register('field[92]', { required: true })}
              type='text'
              name='field[92]'
              id='field[92]'
              className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='field[93]'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Subject Matter Taught*
          </label>
          <div className='mt-2'>
            <input
              {...register('field[93]', { required: true })}
              type='text'
              name='field[93]'
              id='field[93]'
              className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>

      <button
        className={`${
          isSubmitted ? 'bg-neutral-400' : 'bg-base-brand'
        } text-white font-bold text-lg py-2 rounded-lg mt-4 lg:mt-0`}
        type='submit'
        disabled={isSubmitted}
      >
        {isSending ? 'Sending...' : isSubmitted ? 'Submitted!' : 'Submit Form'}
      </button>
    </form>
  );
};

export default ClassPackForm;
