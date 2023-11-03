import React, { useState } from 'react';

const successContent = () => {
  return (
    <div className=' flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold leading-7 tracking-wide text-indigo-600'>
        Success!
      </h2>
      <p className='mt-2 text-3xl font-etna tracking-tight text-gray-900 sm:text-6xl'>
        Thank you for your purchase.
      </p>
      <p className='mt-6 text-xl leading-8 text-gray-600'>
        We are excited to share this educational experience with you. Check your
        inbox in the next coming business days. One of our Curriculum
        Specialists will reach out to work with you through enrollment. Any
        questions? Please reach out to{' '}
        <a
          href='mailto:info@packagingschool.com'
          className='font-bold'
          target='_blank'
          rel='noreferrer'
        >
          Info@PackagingSchool.com.
        </a>
      </p>
    </div>
  );
};

const declineContent = () => {
  return (
    <div className=' flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold leading-7 tracking-wide text-indigo-600'>
        Uh oh!
      </h2>
      <p className='mt-2 text-3xl font-etna tracking-tight text-gray-900 sm:text-6xl'>
        There was an issue with your purchase.
      </p>
      <p className='mt-6 text-xl leading-8 text-gray-600'>
        If you feel this is incorrect, please reach out to{' '}
        <a
          href='mailto:info@packagingschool.com'
          className='font-bold'
          target='_blank'
          rel='noreferrer'
        >
          Info@PackagingSchool.com.
        </a>
      </p>
    </div>
  );
};

const Page = () => {
  const [isContent, setIsContent] = useState(declineContent);

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setIsContent(successContent);
    }

    if (query.get('canceled')) {
      setIsContent(declineContent);
    }
  }, []);
  return (
    <div className='mx-auto max-w-2xl lg:text-center py-40'>{isContent}</div>
  );
};

export default Page;
