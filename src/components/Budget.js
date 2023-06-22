import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Budget = () => {
    const { dispatch, budget, remaining, currency } = useContext(AppContext);
    const changeBudget = (e) => {

        const spentSoFar = budget - remaining; 

        if (e.target.value < spentSoFar) {
            alert("You cannot reduce the budget lower than the spending");
            return;
        }
        
        dispatch({
            type: 'SET_BUDGET',
            payload: e.target.value,
        });
    };

    return (
            <div className='alert alert-secondary'>
                <span>Budget: {currency} <input type='number' onChange={changeBudget} value={budget} min={0} max={20000} step={10}></input></span>
            </div>
    );
};
export default Budget;