/**
 * ************************************
 * @module  RowsContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders a row
 * ************************************
 */

// dependencies
import React from "react";

// components
import CellComponent from "./components/CellComponent.jsx";

// utilities

// interfaces & types

// component
export default function RowsContainer (props) {
  // render a cell per prop
  const cellArr = Object.entries(props).map(([propLabel, displayValue], ind)=> {
    return <CellComponent key={ind} className={`cell-${propLabel}`} displayValue={displayValue}/>
  });
  
  return (
    <div className='RowsContainer'>
      {cellArr}
    </div>
  )
}