/**
 * ************************************
 * @module  TableContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders column titles and rows
 * ************************************
 */

// dependencies
import React, { useEffect, useMemo } from "react";

// components
import TitleTableContainer from "./title/TitleTableContainer.jsx";
import RowsContainer from "./rows/RowsContainer.jsx";

// utilities

// interfaces & types

// component
export default function TableContainer({ ordersObj, setOrderCount, targetPrice }) {
  // Use useMemo to compute rowArray only when ordersObj or targetPrice changes
  let newCount = 0;
  // create the array or orders to render
  const rowArray = useMemo(() => {
    return Array.from(ordersObj.values()).map(({ id, item, event_name, customer, destination, sent_at_second, price }) => {
      if (targetPrice === 0 || targetPrice === price) {
        newCount++;
        return <RowsContainer key={id} id={id} item={item} event_name={event_name} customer={customer} destination={destination} sent_at_second={sent_at_second} price={price} />
      }; 
      return null;
    })
  }, [ordersObj, targetPrice]);

  // update OrderCount base on the current number of order rendered
  useEffect(() => {
      setOrderCount(currentCount => newCount)
    }
  ,[rowArray]);  

  return (
    <table id='tableContainer'>
      <thead>
        <TitleTableContainer/>
      </thead>
      <tbody>
        {rowArray}
      </tbody>
    </table>
  );
}

/**
 * 
export default function TableContainer({ ordersObj, setOrderCount, targetPrice }) {  

  let newCount = 0;
  // create the array or orders to render
  const rowArray = Array.from(ordersObj.values()).map(({ id, item, event_name, customer, destination, sent_at_second, price }) => {
    if (targetPrice === 0 || targetPrice === '') {
      newCount++;
      return <RowsContainer key={id} id={id} item={item} event_name={event_name} customer={customer} destination={destination} sent_at_second={sent_at_second} price={price} />
    } else if (targetPrice === price) {
      newCount++;
      return <RowsContainer key={id} id={id} item={item} event_name={event_name} customer={customer} destination={destination} sent_at_second={sent_at_second} price={price} />
    }
  });

  console.log('rowArray.length --> ', rowArray.length, '\n rowArray  -->'. rowArray);

  // update OrderCount base on the current number of order rendered
  useEffect(() => {
      setOrderCount(currentCount => newCount)
    }
  ,[rowArray]);  

  return (
    <div id='TableContainer'>
      <p>-TableContainer</p>
      <TitleTableContainer />
      {rowArray}
    </div>
  );
}
 */