import React from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import { useSelector } from 'react-redux';

const CMPMProfessionalInfo = ({ activeIndex }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className='grid flex-col gap-6 pt-4'
      style={{ display: activeIndex === 1 ? 'flex' : 'none' }}
    >
      <div className='grid grid-cols-2 gap-8'>
        <TextInput
          name={'companyName'}
          placeholder={''}
          label={'Company Name'}
          required
          value={user && user.cmpmForm ? user.cmpmForm.companyName : ''}
        />
        <TextInput
          name={'companyTitle'}
          placeholder={''}
          label={'Company Title'}
          required
          value={user && user.cmpmForm ? user.cmpmForm.companyTitle : ''}
        />
      </div>
      <TextInput
        name={'linkedIn'}
        placeholder={'https://'}
        label={'LinkedIn Profile'}
        value={user && user.cmpmForm ? user.cmpmForm.linkedIn : ''}
      />
      <TextArea
        name={'background'}
        label={'Your Background'}
        required
        value={user && user.cmpmForm ? user.cmpmForm.background : ''}
      />
      <TextArea
        name={'whyPackaging'}
        label={'Why did you get into packaging?'}
        required
        value={user && user.cmpmForm ? user.cmpmForm.whyPackaging : ''}
      />
      <TextArea
        name={'areaOfInterest'}
        label={'What is your main area of interest?'}
        required
        value={user && user.cmpmForm ? user.cmpmForm.areaOfInterest : ''}
      />
    </div>
  );
};

export default CMPMProfessionalInfo;
