/**
 * ************************************
 * @module  CountComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders order count
 * ************************************
 */

// dependencies
import React from "react";

// components

// utilities

// interfaces & types

// component
export default function CountComponent ({ orderCount }) {
  return (
    <>
      <div id='CountComponentDiv' className="roundDiv">
        <h3>{orderCount}</h3>
      </div>
      {/* <p>orders</p> */}
    </>
  )
}