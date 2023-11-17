import React from 'react';
import { CircleStackIcon, PaintBrushIcon } from '@heroicons/react/24/solid';
import LegendaryGem from './LegendaryGem';

const Card = () => {
  return (
    <div class='card-container'>
      <div class='card-background'>
        <div class='card-frame'>
          <div class='frame-header'>
            <h1 class='name text-xl'>Package Design Workflow</h1>
            <i class='ms ms-g' id='mana-icon'></i>
          </div>

          <img
            class='frame-art'
            src='https://packschool.s3.amazonaws.com/samplecardback.png'
            alt='nissa art'
          />

          <div class='frame-type-line '>
            <h1 class='type leading-tight items-center text-lg'>
              Material, Design
            </h1>
            <div className='flex items-center gap-1'>
              <div className=''>
                <CircleStackIcon className='w-5 h-5 fill-neutral-900' />
              </div>
              <div className='mr-2'>
                <PaintBrushIcon className='w-5 h-5 fill-neutral-900' />
              </div>
            </div>
          </div>

          <div class='frame-text-box'>
            <div class='description ftb-inner-margin text-lg leading-tight'>
              A course that provides the complete pathway of the design process
              from concept to manufacturing. We are going to review design
              terminology, highlight important design theories, such as
              typography, color, imagery and materials.
            </div>
            <p class='flavour-text'>
              &quot;For the life of every plane, I will keep watch.&quot;{' '}
            </p>
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
