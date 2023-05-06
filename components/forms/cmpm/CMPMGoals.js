import React, { useContext } from 'react';
import TextArea from '../TextArea';
import { CMPMContext } from './CMPMContextProvider';

const CMPMGoals = ({ activeIndex }) => {
  const { formValues } = useContext(CMPMContext);
  return (
    <div
      className='flex flex-col gap-6 pt-4'
      style={{ display: activeIndex === 2 ? 'flex' : 'none' }}
    >
      <TextArea
        name={'yearGoals'}
        label={'What goals do you have for yourself in the next 12 months?'}
        required
        value={formValues ? formValues.yearGoals : ''}
      />
      <TextArea
        name={'cmpmGoals'}
        label={
          'How do you see The Certificate of Mastery in Packaging Management helping you achieve those goals?'
        }
        required
        value={formValues ? formValues.cmpmGoals : ''}
      />
      <TextArea
        name={'moreAboutYou'}
        label={
          'We know written applications can only capture so much. As we review your application, what more would you like us to know?'
        }
        required
        value={formValues ? formValues.moreAboutYou : ''}
      />
    </div>
  );
};

export default CMPMGoals;
