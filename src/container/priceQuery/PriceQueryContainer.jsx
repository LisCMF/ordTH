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
import GraphicComponent from "./components/GraphicComponent.jsx";
import QueryComponent from "./components/QueryComponent.jsx";

// utilities

// interfaces & types

// component
export default function PriceQueryContainer () {
  return (
    <div id='PriceQueryContainer'>
      <p>-PriceQueryContainer</p>
      <CountComponent/>
      <GraphicComponent/>
      <QueryComponent/>
    </div>
  )
}