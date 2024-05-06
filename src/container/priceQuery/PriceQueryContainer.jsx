/**
 * ************************************
 * @module  PriceQueryContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the filtering, query, and count of orders per price input
 * ************************************
 */

// dependencies
import React from "react";

// components
import CountComponent from "./components/CountComponent.jsx";
import QueryComponent from "./components/QueryComponent.jsx";

// utilities

// interfaces & types

// component
export default function PriceQueryContainer ({ orderCount, setTargetPrice }) {
  return (
    <div id='PriceQueryContainerDiv'>
      <CountComponent orderCount={orderCount}/>
      <QueryComponent setTargetPrice={setTargetPrice}/>
    </div>
  )
}