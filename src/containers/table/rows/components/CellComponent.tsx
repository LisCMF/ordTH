/**
 * ************************************
 * @module  CellComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders a cell
 * ************************************
 */

// dependencies
import {memo} from "react";

// interfaces & types
interface CellComponentProps {
  className: string;
  displayValue: string;
}

// component
const CellComponent = memo(({className, displayValue}: CellComponentProps) => {
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