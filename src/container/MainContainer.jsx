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
import {io} from 'socket.io-client';

// components
import HeaderContainer from "./header/HeaderContainer.jsx";
import PriceQueryContainer from "./priceQuery/PriceQueryContainer.jsx";
import TableContainer from "./table/TableContainer.jsx";

// utilities

// interfaces & types

// component
export default function MainContainer () {
  const [ordersObj, setOrdersObj] = useState({}); // State of orders
  const [orderCount, setOrderCount] = useState(0); // State of number of orders rendered
  const [targetPrice, setTargetPrice] = useState(''); // State of target price to query orders

  useEffect(() => {
    const socket = io();

    socket.on('order_event', (data) => {
      // console.log('Received order event', data);
      const incomingOrdersObj = {};
      
      // Update incomingOrdersObj with new events
      data.forEach(event => { 
        incomingOrdersObj[event.id] = event;
      });

      // Update ordersObj state
      setOrdersObj(currentOrders => ({
        ...currentOrders,
        ...incomingOrdersObj
      }));
    });

    return () => {
      socket.disconnect(); // Clean up socket connection on unmount
    };
  }, []);

  return (
    <div id='MainContainer'>
      <div id='mainContainerTopDiv'>
        <HeaderContainer/>
        {/* <PriceQueryContainer/> */}
      </div>
      <PriceQueryContainer orderCount={orderCount} setTargetPrice={setTargetPrice}/>
      <p>{targetPrice} is the target Price</p>
      <TableContainer ordersObj={ordersObj} setOrderCount={setOrderCount} targetPrice={targetPrice}/>
    </div>
  )
}