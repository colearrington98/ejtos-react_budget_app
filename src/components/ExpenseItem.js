import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const increaseAllocation = () => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: { name: props.name, cost: 10 },
    });
  };

  const decreaseAllocation = () => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: { name: props.name, cost: -10 },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.cost}</td>
      <td>
        <div className="button-container">
          <button className="button button-increase" onClick={increaseAllocation}>+</button>
        </div>
      </td>
      <td>
        <div className="button-container">
          <button className="button button-decrease" onClick={decreaseAllocation}>-</button>
        </div>
      </td>
      <td>
        <button className="button button-delete" onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;