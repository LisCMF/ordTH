/**
 * ************************************
 * @module  MainContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component renders the overall application 
 * ************************************
 */

// dependencies
import React from "react";

// components
import HeaderContainer from "./header/HeaderContainer.jsx";
import PriceQueryContainer from "./priceQuery/PriceQueryContainer.jsx";
import TableContainer from "./table/TableContainer.jsx";

// utilities

// interfaces & types

// component
export default function MainContainer () {
  return (
    <div id='MainContainer'>
      <p>MainContainer</p>
      <HeaderContainer/>
      <PriceQueryContainer/>
      <TableContainer/>
    </div>
  )
}