import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const FormWrapper = ({ children }) => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='mx-auto w-full px-16 pt-6 pb-12 bg-slate-100'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default FormWrapper;
