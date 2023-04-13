import React, { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CMPMContext } from './cmpm/CMPMContextProvider';

const FormWrapper = ({ children }) => {
  const personalErrors = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'streetAddress',
    'city',
    'state',
    'country',
    'birthYear',
  ];

  const professionalErrors = [
    'companyName',
    'companyTitle',
    'background',
    'whyPackaging',
    'areaOfInterest',
  ];

  const sessionErrors = ['session-applying', 'referral', 'payment'];

  const goalErrors = ['yearGoals', 'cmpmGoals', 'moreAboutYou'];

  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  const onError = (errors) => {
    if (personalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 0]);
    }

    if (!personalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, errorIndex.splice(0)]);
    }

    if (professionalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 1]);
    }

    if (goalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 2]);
    }

    if (sessionErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 3]);
    }
  };

  const { setErrorIndex, errorIndex } = useContext(CMPMContext);

  return (
    <div className='mx-auto w-full px-16 pt-6 pb-12 bg-slate-100'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};

export default FormWrapper;
