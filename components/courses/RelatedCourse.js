import React from 'react';

const RelatedCourse = () => {
  return (
    <div className='w-full bg-gray-300 rounded'>
      <div className='flex flex-col w-full'>
        <div className='aspect-video bg-black relative'>
          <div className='bg-blue-600 rounded absolute left-3 top-3'>
            <div className='py-1 px-2 text-white font-semibold text-sm'>
              Material
            </div>
          </div>
        </div>
        <div className='px-3 py-5 flex flex-col gap-2'>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Packaging Regulations</div>
            <div className='text-gray-600'>
              16 Hours • 60 Courses • 37 Videos
            </div>
          </div>
          <div className='font-bold text-xl'>$399</div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourse;
