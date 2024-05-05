/**
 * ************************************
 * @module  TableContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders column titles and rows
 * ************************************
 */

// dependencies
import React, { useState , useEffect } from "react";

// components
import TitleTableContainer from "./title/TitleTableContainer.jsx";
import RowsContainer from "./rows/RowsContainer.jsx";

// utilities

// interfaces & types

// component
export default function TableContainer({ ordersObj, setOrderCount, targetPrice }) {  

  // create the array or orders to render
  const rowArray = Array.from(ordersObj.values()).map(({ id, item, event_name, customer, destination, sent_at_second, price }) => {
    if (targetPrice === '') {
      return <RowsContainer key={id} id={id} item={item} event_name={event_name} customer={customer} destination={destination} sent_at_second={sent_at_second} price={price} />
    } else if (targetPrice === price) {
      return <RowsContainer key={id} id={id} item={item} event_name={event_name} customer={customer} destination={destination} sent_at_second={sent_at_second} price={price} />
    }
  });

  // update OrderCount base on the current number of order rendered
  useEffect(() => {
    setOrderCount(rowArray.length);
  }, [rowArray]);

  return (
    <div id='TableContainer'>
      <p>-TableContainer</p>
      <TitleTableContainer />
      {rowArray}
    </div>
  );
}