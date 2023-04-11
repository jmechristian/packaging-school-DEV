import React, { useState, createContext } from 'react';

export const CMPMContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
  errorIndex: null,
  setErrorIndex: () => {},
});

const CMPMContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(null);

  return (
    <CMPMContext.Provider
      value={{ activeIndex, setActiveIndex, errorIndex, setErrorIndex }}
    >
      {children}
    </CMPMContext.Provider>
  );
};

export default CMPMContextProvider;
