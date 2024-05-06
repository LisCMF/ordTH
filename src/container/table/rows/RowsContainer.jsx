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
import CellComponent from "./components/CellComponent.jsx";

// utilities
import orderStatus from '../../utilities/orderStatus.js';

// interfaces & types

// component
const RowsContainer =  memo((props) => {
  const rowStatus = useMemo(() => {
    console.log('orderStatus(props.event_name) --> ', orderStatus(props.event_name));
    return orderStatus(props.event_name);
  }, [props.event_name]);


  // render a cell per prop
  const cellArr = Object.entries(props).map(([propLabel, displayValue], ind)=> {
    return <CellComponent key={ind} className={`column-${propLabel}`} displayValue={displayValue}/>
  });

  // const classNames = 

  
  return (
    <tr className={'RowsContainer' + ' ' + rowStatus} >
      {cellArr}
    </tr>
  )
})

export default RowsContainer;