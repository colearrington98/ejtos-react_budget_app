// AppContext.js

import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // Logic to add an expense to the state
      // For example: state.expenses.push(action.payload);
      // Update the state and return it
      return {
        ...state,
        // Update the state based on the action payload
        // For example: expenses: [...state.expenses, action.payload]
      };

    case 'RED_EXPENSE':
      // Logic to reduce an expense from the state
      // For example: state.expenses.filter(expense => expense.id !== action.payload.id);
      // Update the state and return it
      return {
        ...state,
        // Update the state based on the action payload
        // For example: expenses: updatedExpenses
      };

    case 'DELETE_EXPENSE':
      // Logic to delete an expense from the state
      // For example: state.expenses.filter(expense => expense.id !== action.payload);
      // Update the state and return it
      return {
        ...state,
        // Update the state based on the action payload
        // For example: expenses: updatedExpenses
      };

    case 'SET_BUDGET':
      // Logic to set the budget in the state
      // For example: budget: action.payload
      // Update the state and return it
      return {
        ...state,
        // Update the state based on the action payload
        // For example: budget: action.payload
      };

    case 'SET_CURRENCY':
      // Logic to set the currency in the state
      // For example: currency: action.payload
      // Update the state and return it
      return {
        ...state,
        // Update the state based on the action payload
        // For example: currency: action.payload
        currency: action.payload,
      };

    // ... (other cases)

    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const initialState = {
    budget: 2000,
    expenses: [
      { id: "Marketing", name: 'Marketing', cost: 50 },
      { id: "Finance", name: 'Finance', cost: 300 },
      { id: "Sales", name: 'Sales', cost: 70 },
      { id: "Human Resource", name: 'Human Resource', cost: 40 },
      { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  let remaining = 0;

  if (state.expenses) {
    const totalExpenses = state.expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    remaining = state.budget - totalExpenses;
  }

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining: remaining,
        dispatch,
        currency: state.currency
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
