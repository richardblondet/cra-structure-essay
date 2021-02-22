import React, { createContext, FunctionComponent, useState } from 'react';

const initialState = {};

const Context = createContext(initialState);

const Provider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={{state, setState}}>{children}</Context.Provider>
  );
};

const ApplicationProvider = {
  Context,
  Provider
};

export default ApplicationProvider;