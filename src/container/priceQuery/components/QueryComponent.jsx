/**
 * ************************************
 * @module  QueryComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component with from that filters the orders per price input
 * ************************************
 */

// dependencies
import React, { useActionState, useState } from "react";

// components

// utilities

// interfaces & types

// component
export default function QueryComponent ({ setTargetPrice }) {
  // use state

  // action function that update the rows to be display
  // async function updateOrdersQuery(targetPrice) {
  //   return targetPrice + ' updated';
  // }
  
  // const [targetPrice, ordersQueryFormAction] = useActionState(updateOrdersQuery, 'target');
  
  const handleInputValueUpdates = (event) => {
    const { value } = event.target;
    setTargetPrice(Number(value));
  };

  return (
    <div id='QueryComponent'>
      <form id='QueryComponent' >
        <label>target price</label>
        {/* <button formAction={ordersQueryFormAction}>targetPrice</button> */}
        <input type="number" placeholder='00.00' onInput={handleInputValueUpdates}/>
      </form> 
    </div>
  )
}