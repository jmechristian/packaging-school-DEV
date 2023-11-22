import React from 'react';
import { CircleStackIcon, PaintBrushIcon } from '@heroicons/react/24/solid';
import LegendaryGem from './gems/LegendaryGem';

const Card = () => {
  return (
    <div class='max-w-[500px] w-full pb-5  max-h-[500px] h-full border rounded-[25px] bg-[#171314] shadow-lg'>
      <div
        class='h-[90%] mx-[20px] mt-[20px] mb-0 rounded-t-[6px] rounded-b-[8%] bg-cover bg-no-repeat flex bg-[#bbb] z-0'
        style={{
          backgroundImage:
            "url('https://packschool.s3.amazonaws.com/card-back.png')",
        }}
      >
        <div class='card-frame'>
          <div class='frame-header'>
            <h1>Package Design Workflow</h1>
          </div>

          <img
            class='frame-art'
            src='https://packschool.s3.amazonaws.com/samplecardback.png'
            alt='nissa art'
          />

          <div class='frame-type-line'>
            <h1 class='leading-tight items-center'>Material, Design</h1>
            <div className='flex items-center gap-1'>
              <div className=''>
                <CircleStackIcon className='w-5 h-5 fill-neutral-900' />
              </div>
              <div className='mr-2'>
                <PaintBrushIcon className='w-5 h-5 fill-neutral-900' />
              </div>
            </div>
          </div>

          <div class='frame-text-box h-48'>
            <div class='description pt-2 pb-3 text-lg lg:text-sm lg:leading-tight leading-tight'>
              A course that provides the complete pathway of the design process
              from concept to manufacturing. We are going to review design
              terminology, highlight important design theories, such as
              typography, color, imagery and materials.
            </div>
          </div>

          <div class='frame-bottom-info inner-margin relative z-0'>
            <div class='fbi-left'>
              <p>CPS-08</p>
            </div>

            <div class='fbi-right'>
              Packaging School<sup>&copy;</sup>
            </div>
            <div className='absolute -bottom-2 w-full'>
              <div className='w-12 h-12 rounded-full mx-auto'>
                <div className='shadow-lg'>
                  <LegendaryGem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
