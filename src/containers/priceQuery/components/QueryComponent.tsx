/**
 * ************************************
 * @module  QueryComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component with from that filters the orders per price input
 * ************************************
 */

// dependencies
import React, { ChangeEvent } from "react";

// interfaces & types
interface QueryComponentProps {
  setTargetPrice: (price: number) => void;
}

/** NOTES:
 * This module can be update in july 2024 to implement optimized React v19 form hooks
*/

// component
export default function QueryComponent ({ setTargetPrice} : QueryComponentProps) {
  const handleInputValueUpdates = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTargetPrice(Number(value));
  };

  return (
    <>
      <form id='QueryComponentForm' >
        <label id='targetPriceLabel'>TARGET PRICE:</label>
        <input id='targetPriceInput'type="number" placeholder=' type price here !' onInput={handleInputValueUpdates}/>
      </form> 
    </>
  )
}