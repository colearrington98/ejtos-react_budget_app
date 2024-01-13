// Budget.js

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import CurrencyInput from 'react-currency-input-field'

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  // Handle change in budget
  const onChangeBudgetHandler = (event) => {
    const enteredValue = Number(event.target.value);

    if (Number.isNaN(enteredValue)) {
      alert('Please enter a valid number.');
      return;
    }

    if (!Number.isInteger(enteredValue)) {
      alert('Please enter an integer number.');
      return;
    }

    if (enteredValue < totalExpenses) {
      alert(`The budget value can't be lower than the total expenses value ${currency}${totalExpenses}`);
    } else {
      dispatch({
        type: 'SET_BUDGET',
        payload: enteredValue,
      });
    }
  };

  // Handle change in currency
  const onChangeCurrencyHandler = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({
      type: 'SET_CURRENCY',
      payload: selectedCurrency,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div>
        <label htmlFor="budget">Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        />
        <label htmlFor="currency" style={{ marginLeft: '10px' }}>
          Currency:
        </label>
        <select value={currency} onChange={onChangeCurrencyHandler} id="currency" style={{ marginLeft: '5px' }}>
          <option value="$">Dollar ($)</option>
          <option value="£">Pound (£)</option>
          <option value="€">Euro (€)</option>
          <option value="₹">Rupee (₹)</option>
        </select>
      </div>
    </div>
  );
};

export default Budget;
