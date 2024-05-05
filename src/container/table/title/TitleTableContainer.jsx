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
const TitleTableContainer = memo(() => {
  return (
    <div id='TitleTableContainer'>
      <p>--TitleTableContainer</p>
      <ColumnTitleComponent/>
    </div>
  )
})

export default TitleTableContainer;