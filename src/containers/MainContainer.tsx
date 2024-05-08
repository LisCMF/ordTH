/**
 * ************************************
 * @module  MainContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component renders the overall application 
 * ************************************
 */

// dependencies
import React, { useState , useEffect } from "react";
import {io, Socket} from 'socket.io-client';
// import { Socket } from 'socket.io-client';

// components
import HeaderContainer from "./header/HeaderContainer";
import PriceQueryContainer from "./priceQuery/PriceQueryContainer";
import TableContainer from "./table/TableContainer";

// utilities 

// connections
const socket: Socket = io('http://localhost:4000/');


// interfaces & types
import { OrdersObj } from './../types/OrdersObj';
// export interface OrdersObj {
//   id: string;
//   item: string;
//   event_name: string;
//   customer: string;
//   destination: string;
//   sent_at_second: string;
//   price: string;
// }

// component
export default function MainContainer () {
  const [ordersObj, setOrdersObj] = useState<Map<string, OrdersObj>>(new Map()); // State of orders
  const [orderCount, setOrderCount] = useState<number>(0); // State of number of orders rendered
  const [targetPrice, setTargetPrice] = useState<number>(0); // State of target price to query orders
  const [rowLoading, setRowLoading] = useState<boolean>(false); // State of check if data to load roads is pending

  useEffect(() => {
    socket.on('order_event', (orderEvents: OrdersObj[]) => {
      const incomingOrdersObj = new Map<string, OrdersObj>()
      
      // Update incomingOrdersObj with new events
      orderEvents.forEach(event => { 
        incomingOrdersObj.set(event.id, event);
      });

      setOrdersObj(currentOrders => new Map([...currentOrders, ...incomingOrdersObj])); 

      setRowLoading(true); 
    });

    return () => {
      socket.disconnect(); // Clean up socket connection on unmount
    };
  }, [socket]);

  return (
    <div id='MainContainer'>
      <div id='mainContainerTopDiv'>
        <HeaderContainer/> 
        <h1 id='orderManagerH1'>Order Manager</h1>
        <PriceQueryContainer orderCount={orderCount} setTargetPrice={setTargetPrice}/>
      </div>
      <TableContainer ordersObj={ordersObj} setOrderCount={setOrderCount} targetPrice={targetPrice} rowLoading={rowLoading}/>
    </div>
  )
}