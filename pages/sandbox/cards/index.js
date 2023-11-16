import React from 'react';
import LegendaryGem from '../../../components/cards/gems/LegendaryGem';

const Page = () => {
  return (
    <div className='w-full h-full my-24 max-w-6xl mx-auto border p-12'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
        <div className='w-full col-span-full font-semibold text-3xl'>
          Card UI Sandbox
        </div>
        <div className='w-[300px] h-[400px] bg-neutral-800 rounded-lg shadow-lg p-3'>
          <div className='w-full h-full bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#d2ac47] rounded-lg p-2'></div>
        </div>
        <div>Card 2</div>
        <div>Card 3</div>
      </div>
    </div>
  );
};

export default Page;
