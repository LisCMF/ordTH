/**
 * ************************************
 * @module  TitleTableContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the title of each column
 * ************************************
 */

// dependencies
import React, { memo } from "react";

// components
import ColumnTitleComponent from "./components/ColumnTitleComponent.jsx";

// utilities

// interfaces & types

// component
const TitleTableContainer = memo(({}) => {
  // array of column's titles and related cell category
  const tableTitles = [
    ['Order ID', 'id'], 
    ['Item', 'item'], 
    ['Order Status', 'event_name'], 
    ['Customer', 'customer'], 
    ['Destination', 'destination'], 
    ['Time of Placement', 'sent_at_second'], 
    ['Price $US', 'price']
  ];
 
 
  const arrOfColumnTitleComponents = tableTitles.map(([titleText, cellType], ind) => {
    return <ColumnTitleComponent key={ind} titleText={titleText} columnClass={`column-${cellType}`}/> 
  })


  return (
    <tr id='trTitleTableContainer'>
      {arrOfColumnTitleComponents}
    </tr>
  )
})

export default TitleTableContainer;