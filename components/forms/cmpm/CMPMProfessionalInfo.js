import React, { useContext } from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import { useSelector } from 'react-redux';
import { CMPMContext } from './CMPMContextProvider';

const CMPMProfessionalInfo = ({ activeIndex }) => {
  const { user } = useSelector((state) => state.auth);
  const { formValues } = useContext(CMPMContext);

  return (
    <div
      className='grid flex-col gap-6 pt-4'
      style={{ display: activeIndex === 1 ? 'flex' : 'none' }}
    >
      <div className='grid lg:grid-cols-2 gap-8'>
        <TextInput
          name={'companyName'}
          placeholder={''}
          label={'Company Name'}
          required
          value={formValues ? formValues.companyName : ''}
        />
        <TextInput
          name={'companyTitle'}
          placeholder={''}
          label={'Company Title'}
          required
          value={formValues ? formValues.companyTitle : ''}
        />
      </div>
      <TextInput
        name={'linkedIn'}
        placeholder={'https://'}
        label={'LinkedIn Profile'}
        value={formValues ? formValues.linkedin : ''}
      />
      <TextArea
        name={'background'}
        label={'Your Background'}
        required
        value={formValues ? formValues.background : ''}
      />
      <TextArea
        name={'whyPackaging'}
        label={'Why did you get into packaging?'}
        required
        value={formValues ? formValues.whyPackaging : ''}
      />
      <TextArea
        name={'areaOfInterest'}
        label={'What is your main area of interest?'}
        required
        value={formValues ? formValues.areaOfInterest : ''}
      />
    </div>
  );
};

export default CMPMProfessionalInfo;
