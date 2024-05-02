/**
 * ************************************
 * @module  TableContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders column titles and rows
 * ************************************
 */

// dependencies
import React from "react";

// components
import TitleTableContainer from "./title/TitleTableContainer.jsx";
import RowsContainer from "./rows/RowsContainer.jsx";

// utilities

// interfaces & types

// component
export default function TableContainer () {
  return (
    <div id='TableContainer'>
      <p>-TableContainer</p>
      <TitleTableContainer/>
      <RowsContainer/>
    </div>
  )
}