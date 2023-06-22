import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropDown = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value
        });
    };

    return (
        <div className='alert alert-info'>
            <select onChange={changeCurrency}>
                <option onClick={changeCurrency} value="$">$ Dollar</option>
                <option onClick={changeCurrency} value="£">£ Pound</option>
                <option onClick={changeCurrency} value="€">€ Euro</option>
                <option onClick={changeCurrency} value="₹">₹ Ruppee</option>
            </select>
        </div>
      );
    
};

export default CurrencyDropDown;