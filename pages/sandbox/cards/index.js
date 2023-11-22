import React from 'react';
import Card from '../../../components/cards/Card';

const Page = () => {
  return (
    <div className='w-full h-full my-24 max-w-7xl mx-auto border p-12'>
      <div className='flex flex-col gap-3'>
        <div className='w-full col-span-full font-semibold text-3xl'>
          Card UI Sandbox
        </div>
        <div className='grid lg grid-cols-3 gap-9'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Page;
