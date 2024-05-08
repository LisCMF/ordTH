/**
 * ************************************
 * @module  RowsContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders a row
 * ************************************
 */

// dependencies
import React, {memo, useMemo, useState} from "react";

// components
import CellComponent from "./components/CellComponent";

// utilities
import orderStatus from '../../utilities/orderStatus.js';

// interfaces & types
interface RowsContainerProps {
  id: string, 
  item: string, 
  event_name: string, 
  customer: string, 
  destination: string, 
  sent_at_second: string, 
  price: string
}

// component
const RowsContainer =  memo((props: RowsContainerProps): JSX.Element => {
  const rowStatus = useMemo(() => {
    console.log('orderStatus(props.event_name) --> ', orderStatus(props.event_name));
    return orderStatus(props.event_name);
  }, [props.event_name]);


  // render a cell per prop
  const cellArr: JSX.Element[] = Object.entries(props).map(([propLabel, displayValue], ind)=> {
    return <CellComponent key={ind} className={`column-${propLabel}`} displayValue={displayValue}/>
  });

  return (
    <tr className={'RowsContainer' + ' ' + rowStatus} >
      {cellArr}
    </tr>
  )
})

export default RowsContainer;