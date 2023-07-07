import React from 'react';
import WeekItem from './WeekItem';

const CertificateCirriculum = () => {
  return (
    <div className='container-7xl py-16 lg:py-32'>
      <div className='flex flex-col gap-16'>
        <div className='text-center text-5xl'>
          <h2>Comprehensive Cirriculum</h2>
        </div>
        <div className='grid lg:grid-cols-4 gap-9 overflow-hidden'>
          <div className='flex flex-col gap-9 w-full'>
            <WeekItem
              week={'1'}
              title='Global Competitive Landscape'
              content='Major companies, products and markets, including market share concentration, key success factors, current volumes and forecasts.'
            />
            <WeekItem
              week={'5'}
              title='Material Management II'
              content='Fundamental material properties of Glass, Metal, and Polymers converted to packaging solutions.'
            />
            <WeekItem />
          </div>
          <div className='flex flex-col gap-9 w-full'>
            <WeekItem
              week={'2'}
              title='Project Management Essentials'
              content='Core management skills such as project management, problem-solving, administrative and being financially savvy.'
            />
            <WeekItem
              week={'6'}
              title='Break'
              content="Catch your breath! You've been working hard."
            />
            <WeekItem />
          </div>
          <div className='flex flex-col gap-9 w-full'>
            <WeekItem
              week={'3'}
              title='Regulations & Corporate Sustainability'
              content='Introductions to the major regulatory agencies and applicable laws for packaging compliance in key industries.'
            />
            <WeekItem />
            <WeekItem />
          </div>
          <div className='flex flex-col gap-9 w-full'>
            <WeekItem
              week={'4'}
              title={`Material\n Management I`}
              content='Fundamental material properties of Glass, Metal, and Polymers converted to packaging solutions.'
            />
            <WeekItem />
            <WeekItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCirriculum;
