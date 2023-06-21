import React, { useState } from 'react';

import { Tab } from '@headlessui/react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import CPSPersonalInfo from './CPSPersonalInfo';
import CPSProfessionalInfo from './CPSProfessionalInfo';
import CPSGoals from './CPSGoals';
import CPSApply from './CPSApply';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CPSNav from './CPSNav';
import CPSForm from './CPSForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CPSWrapper = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  let [categories] = useState({
    Personal: [{ component: CPSPersonalInfo }],
    Professional: [{ component: CPSProfessionalInfo }],
    Goals: [{ component: CPSGoals }],
    Apply: [{ component: CPSApply }],
  });

  const sendFormToAWS = async () => {};

  const saveHandler = (event) => {
    event.preventDefault();
    const data = methods.getValues();
    console.log(methods.formState.errors);
    sendFormToAWS();
  };

  return (
    <div className='w-full max-w-md py-8 sm:px-0'>
      <FormProvider {...methods}>
        <CPSNav />
        <CPSForm />
      </FormProvider>
    </div>
  );
};

export default CPSWrapper;
