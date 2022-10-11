import React from 'react';

const SkillsCTA = () => {
  return (
    <div className='w-full px-8 py-10 bg-gradient-to-b from-base-dark to-clemson rounded-md'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <div className='font-bold text-3xl text-white'>
            Not Sure Where to Start?
          </div>
          <div className='text-xl text-white'>
            Know exactly where your teams stands with our currated skills test.
          </div>
        </div>
        <button className='bg-dark py-3 px-6 rounded-md shadow-xl'>
          <div className='font-bold  text-white uppercase'>
            Start YOUR Skills Assesment
          </div>
        </button>
      </div>
    </div>
  );
};

export default SkillsCTA;
