import React from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';

const CMPMGoals = () => {
  return (
    <div className='flex flex-col gap-4 pt-4'>
      <TextArea
        name={'yearGoals'}
        label={'YWhat goals do you have for yourself in the next 12 months?'}
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
