import React, { useState, createContext } from 'react';

export const CMPMContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
});

const CMPMContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CMPMContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </CMPMContext.Provider>
  );
};

export default CMPMContextProvider;
