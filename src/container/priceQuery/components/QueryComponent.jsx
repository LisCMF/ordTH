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
  const handleInputValueUpdates = (event) => {
    const { value } = event.target;
    setTargetPrice(Number(value));
  };

  return (
    <>
      <form id='QueryComponentForm' >
        <label id='targetPriceLabel'>TARGET PRICE:</label>
        {/* <button formAction={ordersQueryFormAction}>targetPrice</button> */}
        <input id='targetPriceInput'type="number" placeholder=' type price here !' onInput={handleInputValueUpdates}/>
      </form> 
    </>
  )
}