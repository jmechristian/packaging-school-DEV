import React, { useState, createContext, useEffect } from 'react';

export const CMPMContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
  errorIndex: [],
  setErrorIndex: () => {},
  formValue: {},
  setFormValues: () => {},
  initParams: { firstName: '', lastName: '', email: '', phone: '' },
});

const CMPMContextProvider = ({ children, pageData, params }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [initParams, setInitParams] = useState({});

  useEffect(() => {
    if (params) {
      setInitParams({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        phone: params.phone,
      });
    }
  }, [params]);

  return (
    <CMPMContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        errorIndex,
        setErrorIndex,
        formValues: pageData?.getCMPMForm,
        setFormValues,
        params: initParams,
      }}
    >
      {children}
    </CMPMContext.Provider>
  );
};

export default CMPMContextProvider;
