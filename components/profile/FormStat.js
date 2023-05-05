import React from 'react';

const FormStat = ({ stat, label, link, updated }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newDate = new Date(updated).toLocaleString();

  return (
    <div className='flex flex-col' key={label}>
      <div className='px-6 py-5 text-center text-lg font-medium font-greycliff'>
        <span className='text-slate-100 font-bold'>{stat ? '1' : '0'}</span>{' '}
        <span className='text-slate-100'>{label}</span>
      </div>
      <div className='flex flex-col gap-2 py-16 border-r border-r-slate-300 bg-slate-200 h-full justify-center items-center'>
        <div className='text-slate-700 text-sm'>
          {!updated ? (
            'No Applications Found'
          ) : (
            <div className='flex flex-col gap-1 items-center'>
              <div className='font-semibold'>Last Updated:</div>
              <div>{updated && newDate}</div>
            </div>
          )}
        </div>
        <div className='mt-5 flex justify-center sm:mt-0'>
          <a
            href={link}
            className={`flex items-center justify-center rounded-md cursor-pointer ${
              !updated
                ? 'bg-clemson hover:bg-clemson-dark'
                : 'bg-base-brand hover:bg-base-mid'
            } text-white px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-slate-300 font-greycliff`}
          >
            {updated ? 'View' : 'Start'} Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormStat;
