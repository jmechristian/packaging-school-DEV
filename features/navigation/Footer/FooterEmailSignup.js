import React, { useState } from 'react';

const FooterEmailSignup = () => {
  const [email, setEmail] = useState('');
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1 text-sm'>
        <div className='font-extrabold text-sm uppercase tracking-widest text-slate-200 font-greycliff'>
          Stay Up To Date
        </div>
        <p className='text-slate-500'>
          Be the first to know about new classes and the latest tools to
          maximize your knowledge.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <form className='flex h-11 border-none'>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='you@email.com'
            onChange={(e) => setEmail(e.target.value)}
            className='flex w-full border border-slate-500  bg-slate-800 rounded-l text-slate-300 focus:ring-base-light focus:border-none'
          />
          <button className='bg-base-dark flex justify-center items-center border-none rounded-r border border-slate-500'>
            <div className='text-slate-300 font-medium uppercase text-xs tracking-widest px-3'>
              Subscribe
            </div>
          </button>
        </form>
        <p className='text-xs text-slate-500 max-w-prose'>
          By signing up you indicate you have read and agree to our Terms of
          Use. Packaging School will always respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default FooterEmailSignup;
