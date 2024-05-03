/**
 * ************************************
 * @module  QueryComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component with from that filters the orders per price input
 * ************************************
 */

// dependencies
import React, { useActionState } from "react";

// components

// utilities

// interfaces & types

// component
export default function QueryComponent () {
  // action function that update the rows to be display
  // async function updateOrdersQuery(ordersQuery) {
  //   return ordersQuery + 1;
  // }
  // const [ordersQuery, ordersQueryFormAction] = useActionState(updateOrdersQuery, 0);
  return (
    <div id='QueryComponent' className="roundDiv">
      {/* <form id='QueryComponent' >
        <label>{ordersQuery}</label>
        
      </form> */}
      <p>select target price</p>
    </div>
  )
}