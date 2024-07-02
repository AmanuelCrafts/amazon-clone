import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook to use the state context
export const useStateValue = () => useContext(StateContext);
