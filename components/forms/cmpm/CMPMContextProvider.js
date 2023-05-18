import React, { useState, createContext } from 'react';

export const CMPMContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
  errorIndex: [],
  setErrorIndex: () => {},
  formValue: {},
  setFormValues: () => {},
});

const CMPMContextProvider = ({ children, pageData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState([]);
  const [formValues, setFormValues] = useState({});

  return (
    <CMPMContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        errorIndex,
        setErrorIndex,
        formValues: pageData?.getCMPMForm,
        setFormValues,
      }}
    >
      {children}
    </CMPMContext.Provider>
  );
};

export default CMPMContextProvider;
