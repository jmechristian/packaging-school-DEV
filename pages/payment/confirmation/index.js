import React from 'react';

const Page = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-3 xl:px-0 py-16 lg:py-44'>
      <div className='w-full max-w-5xl mx-auto grid gap-10 md:grid-cols-12 border-2 border-black px-8 py-12 shadow-[9px_9px_0px_rgba(0,0,0,0.20)]'>
        <div className='md:col-span-5 w-full'>
          <div
            className='w-full min-h-[250px] h-full bg-cover bg-center border-2 border-black'
            style={{
              backgroundImage: `url("https://packschool.s3.amazonaws.com/firework-box-3.webp")`,
            }}
          ></div>
        </div>
        <div className='md:col-span-7'>
          <div className='flex flex-col gap-10'>
            <div className='h1-base'>Order Successfully Submitted!</div>
            <div className='flex flex-col gap-2'>
              <div className='h3-base text-base-mid'>What&apos;s Next?</div>
              <div className='max-w-2xl text-lg'>
                You will receive confirmation at the payment email provided
                within 24 hours. Our curriculum specialists will enroll you and
                reach out with access details within 48 hours. For any
                questions, please email{' '}
                <span className='font-bold'>info@packagingschool.com.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
