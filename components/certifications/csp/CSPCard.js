import React from 'react';
import { KeyIcon } from '@heroicons/react/24/solid';
import { TrophyIcon } from '@heroicons/react/24/outline';

const CSPCard = () => {
  return (
    <div className='rounded-2xl bg-neutral-200 p-10 flex flex-col gap-12 shadow-xl'>
      <div className='w-full h-full divide-x divide-y divide-solid border-b border-b-base-brand border-r border-r-base-brand divide-base-brand grid grid-cols-2 mx-auto'>
        <div className='w-full bg-base-brand py-3 col-span-2'>
          <div className='flex items-center px-6 gap-2'>
            <div>
              <TrophyIcon className='w-6 h-6 stroke-white' />
            </div>
            <div className='text-white font-bold text-2xl'>
              <h3>Sustainable Champion</h3>
            </div>
          </div>
        </div>
        <div className='col-span-2 w-full p-6 border-b border-b-base-brand'>
          <div className='text-lg'>
            This 40-hour workshop unlocks the Sustainable Champion achievement,
            empowering companies to cultivate internal heroes mastering the dos
            and don&apos;ts of sustainable packaging, transforming intentions
            into impactful actions.
          </div>
        </div>
        <div className='p-6'>
          <div className='aspect-[1/1] bg-neutral-800'></div>
        </div>
        <div className='p-6'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex gap-2 items-center'>
                <div>
                  <KeyIcon className='w-5 h-5 fill-clemson' />
                </div>
                <div className='text-lg font-semibold'>Objective 1</div>
              </div>
              <div className='pl-7'>
                Define the key terminology a learner needs to speak the language
                of sustainability with colleagues and customers
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex gap-2 items-center'>
                <div>
                  <KeyIcon className='w-5 h-5 fill-clemson' />
                </div>
                <div className='text-lg font-semibold'>Objective 2</div>
              </div>
              <div className='pl-7'>
                Construct UN-based sustainability targets and goals
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex gap-2 items-center'>
                <div>
                  <KeyIcon className='w-5 h-5 fill-clemson' />
                </div>
                <div className='text-lg font-semibold'>Objective 3</div>
              </div>
              <div className='pl-7'>
                Develop sustainable system designs (on the material level)
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex gap-2 items-center'>
                <div>
                  <KeyIcon className='w-5 h-5 fill-clemson' />
                </div>
                <div className='text-lg font-semibold'>Objective 4</div>
              </div>
              <div className='pl-7'>
                Measure the carbon footprint of their packaging
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex gap-2 items-center'>
                <div>
                  <KeyIcon className='w-5 h-5 fill-clemson' />
                </div>
                <div className='text-lg font-semibold'>Objective 5</div>
              </div>
              <div className='pl-7'>
                Select relevant offset programs to achieve carbon neutrality at
                a per product/package
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex gap-2 items-center'>
                <div>
                  <KeyIcon className='w-5 h-5 fill-clemson' />
                </div>
                <div className='text-lg font-semibold'>Objective 6</div>
              </div>
              <div className='pl-7'>
                Assess your environmental performance criteria through a license
                to cutting-edge sustainability tools (ISO 14040 compliant life
                cycle analysis software) into your concept development and
                material selection steps of packaging design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSPCard;
