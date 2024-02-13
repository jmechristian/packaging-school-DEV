import React from 'react';

const Page = () => {
  return (
    <div className='max-w-4xl w-full mx-auto px-5 xl:px-0 py-20 lg:py-40'>
      <div className='flex-col flex md:flex-row items-center border-2 border-black rounded-2xl shadow-2xl overflow-hidden'>
        <div
          className='aspect-[1/1] max-w-md w-full bg-black bg-cover bg-center'
          style={{
            backgroundImage: `url('https://packschool.s3.amazonaws.com/form-thanks-sm.webp')`,
          }}
        ></div>
        <div>
          <div className='flex flex-col w-full justify-center p-10'>
            <div>
              <h2 className='text-2xl xl:text-3xl'>
                Your form has been submitted.
              </h2>
            </div>
            <div>
              <p className='mt-6 text-lg'>
                Please allow up to 48 hours for your form to be reviewed. For
                questions, please email Info@PackagingSchool.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
