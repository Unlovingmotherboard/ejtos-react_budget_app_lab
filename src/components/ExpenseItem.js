import React, { useContext } from "react";
// import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    // const handleDeleteExpense = () => {
    //     dispatch({
    //         type: 'DELETE_EXPENSE',
    //         payload: props.id,
    //     });
    // };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const subExpense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: subExpense,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.cost}</td>
            <td><button className="btn btn-success" onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><button className="btn btn-danger" onClick={event => decreaseAllocation(props.name)}>-</button></td>
            {/* <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td> */}
            <td></td>
        </tr>
    );
};

export default ExpenseItem;
