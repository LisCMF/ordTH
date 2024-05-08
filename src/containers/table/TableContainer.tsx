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
import TitleTableContainer from "./title/TitleTableContainer";
import RowsContainer from "./rows/RowsContainer";

// interfaces & types
import { OrdersObj } from './../../types/OrdersObj';

interface TableContainer {
  ordersObj: Map<string, OrdersObj>;
  setOrderCount: (price: number) => void; // import
  targetPrice: number;
}


// component
export default function TableContainer({ ordersObj, setOrderCount, targetPrice }: TableContainer) {
  // Use useMemo to compute rowArray only when ordersObj or targetPrice changes
  let newCount:number = 0;

  const rowArray = useMemo(() => {
    return Array.from(ordersObj.values()).map(({ id, item, event_name, customer, destination, sent_at_second, price }: OrdersObj) => {
      if (targetPrice === 0 || targetPrice === Number(price)) {
        newCount++;
        return <RowsContainer key={id} id={id} item={item} event_name={event_name} customer={customer} destination={destination} sent_at_second={sent_at_second} price={price} />
      }; 
      return null;
    })
  }, [ordersObj, targetPrice]);

  // update OrderCount base on the current number of order rendered
  useEffect(() => {
      setOrderCount(newCount);
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