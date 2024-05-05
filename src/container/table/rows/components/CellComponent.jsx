/**
 * ************************************
 * @module  CellComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders a cell
 * ************************************
 */

// dependencies
import React, {memo} from "react";
// components

// utilities

// interfaces & types

// component
const CellComponent = memo(({className, displayValue}) => {
  return (
    <div className={`${className} CellComponentDiv`}>
      {displayValue}
    </div>
  )
})

export default CellComponent;