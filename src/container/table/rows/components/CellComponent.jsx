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
  if (displayValue[6]==='_') {
    displayValue = displayValue.substring(0, 5) + ' ' + displayValue.substring(7);
  };

  return (
    <td className={`${className} cell`}>
      {displayValue}
    </td>
  )
})

export default CellComponent;