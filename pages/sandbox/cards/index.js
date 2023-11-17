import React from 'react';
import LegendaryGem from '../../../components/cards/gems/LegendaryGem';
import { PuzzlePieceIcon } from '@heroicons/react/24/solid';
import Card from '../../../components/cards/gems/Card';

const Page = () => {
  return (
    <div className='w-full h-full my-24 max-w-6xl mx-auto border p-12'>
      <div className='flex flex-col gap-16'>
        <div className='w-full col-span-full font-semibold text-3xl'>
          Card UI Sandbox
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Page;
