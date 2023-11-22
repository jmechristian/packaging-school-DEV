import React from 'react';
import Card from '../../../components/cards/Card';
import CardTwo from '../../../components/cards/CardTwo';

const Page = () => {
  return (
    <div className='w-full h-full my-24 max-w-7xl mx-auto border p-12'>
      <div className='flex flex-col gap-24'>
        <div className='flex flex-col gap-6'>
          <div className='w-full col-span-full font-semibold text-3xl'>
            Card 1
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='w-full col-span-full font-semibold text-3xl'>
            Card 2
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9'>
            <CardTwo />
            <CardTwo />
            <CardTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
