// AppContext.js

import React, { createContext, useReducer } from 'react';

// Define your reducer function
export const AppReducer = (state, action) => {
    // Remove the unused 'budget' variable
    // let budget = 0;
  
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
  
      // ... (other cases)
  
      default:
        return state;
    }
  };

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = (props) => {
  // Sets the initial state when the app loads
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

  // Sets up the app state. takes a reducer, and an initial state
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

