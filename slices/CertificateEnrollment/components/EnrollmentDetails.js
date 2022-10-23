import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import CTAButtonLarge from '../../../components/CTAButtonLarge';

const EnrollmentDetails = ({ items, price }) => {
  return (
    <div className='flex flex-col w-full gap-5 justify-between h-full'>
      <div className='flex flex-col gap-5'>
        <div className='font-extrabold font-plex text-lg border-b w-full border-b-gray-800 pb-2'>
          Future Proof Your Skills
        </div>
        <div className='flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start gap-3'>
          <div className='font-semibold text-6xl xl:text-7xl md:mr-8 lg:mr-0'>
            {price}
          </div>
          <div className='mt-2'>
            {items.map((item, i) => (
              <div key={i} className='flex gap-2 items-center'>
                <CheckBadgeIcon className='w-7 h-8 fill-green-700' />
                <div>{item.enrollment_benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTAButtonLarge />
    </div>
  );
};

export default EnrollmentDetails;
