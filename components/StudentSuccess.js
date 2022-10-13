import React from 'react';

const StudentSuccess = () => {
  return (
    <section className='flex border bg-white border-black drop-shadow-lg p-8 lg:p-12'>
      <div className='grid grid-cols-1 gap-3'>
        <div className='col-span-1 uppercase font-extrabold lg:text-2xl text-base-brand'>
          Student Success Stories
        </div>
        <div className='w-full flex justify-start text-clemson font-plex text-9xl max-h-min'>
          &ldquo;
        </div>
        <div className='text-neutral-600 font-light text-xl lg:text-2xl -mt-16'>
          The CMPM program exceeded my expectations regarding packaging machine
          systems, sustainability, and point of purchase strategies, through a
          complete and holistic approach to the different aspects of packaging.
        </div>
        <div className='w-full flex justify-end text-clemson font-plex text-9xl -mt-4 max-h-min'>
          &rdquo;
        </div>
        <div className='flex flex-col md:flex-row md:items-center lg:justify-end -mt-16 text-neutral-600 gap-2'>
          <div
            className='w-9 h-9 rounded-full'
            style={{
              backgroundImage: `url('https://randomuser.me/api/portraits/women/63.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div className='flex flex-col'>
            <div className='font-bold'>Rebeca Granados Andrade</div>
            <div className='text-sm'>
              Experience Centre Manager Smurfit Kappa México
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
