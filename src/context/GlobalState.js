import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

// creat context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function deleteTrans(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTrans(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTrans, addTrans }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
