import React from 'react';
import TextArea from '../TextArea';
import { useFormContext } from 'react-hook-form';

const CMPMGoals = () => {
  const { formState, register } = useFormContext();
  return (
    <div className='flex flex-col gap-6 lg:gap-9'>
      <TextArea
        name={'yearGoals'}
        label={'What goals do you have for yourself in the next 12 months?'}
        required
      />
      <TextArea
        name={'cmpmGoals'}
        label={
          'How do you see The Certificate of Mastery in Packaging Management helping you achieve those goals?'
        }
        required
      />
      <TextArea
        name={'moreAboutYou'}
        label={
          'We know written applications can only capture so much. As we review your application, what more would you like us to know?'
        }
        required
      />
    </div>
  );
};

export default CMPMGoals;
