import React, { useEffect, useState } from 'react';
import { createClient } from '../../../prismicio';

const EnrollmentCalendar = () => {
  const [calendar, setCalendar] = useState(null);
  const client = createClient();

  useEffect(() => {
    const getDates = async () => {
      const cal = await client.getByUID('calendar', 'cmpm');
      setCalendar(cal);
    };

    getDates();
  }, []);

  return (
    <div className='w-full flex flex-col gap-2'>
      {calendar &&
        calendar.data.slices[0].items.map((item, i) => (
          <div key={i} className='text-black grid grid-cols-2 w-full'>
            <div className='col-span-2 bg-base-dark text-white font-semibold px-2 py-1'>
              {item.session}
            </div>
            <div className='col-span-1 bg-base-light text-neutral-600 text-sm font-semibold px-2 py-1'>
              Dates
            </div>
            <div className='col-span-1 bg-base-light text-neutral-600 text-sm font-semibold px-4 py-1'>
              Deadline
            </div>
            <div className='col-span-1 text-sm px-2 py-1 text-neutral-600'>
              {item.date}
            </div>
            <div className='col-span-1 text-sm px-4 py-1 font-bold text-neutral-600'>
              {item.deadline}
            </div>
          </div>
        ))}
    </div>
  );
};

export default EnrollmentCalendar;
