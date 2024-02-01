import React from 'react';

const LibraryWrapper = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-5 xl:px-0 py-12 flex flex-col gap-16'>
      <div className='w-full grid lg:grid-cols-2 gap-6'>
        <div className='w-full flex flex-col gap-3'>
          <div>Logo</div>
          <div>Display Name</div>
          <div>Description</div>
        </div>
        <div className='w-full'>The thing</div>
      </div>
      <div className='flex flex-col gap-3'>
        <div>Lib</div>
        <div>Lib</div>
        <div>Lib</div>
        <div>Lib</div>
        <div>Lib</div>
      </div>
    </div>
  );
};

export default LibraryWrapper;
