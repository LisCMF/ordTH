/**
 * ************************************
 * @module  CellComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders a cell
 * ************************************
 */

// dependencies
import React from "react";

// components


// utilities

// interfaces & types

// component
export default function CellComponent ({className, displayValue}) {
  return (
    <div className={`${className} CellComponentDiv`}>
      {displayValue}
    </div>
  )
}