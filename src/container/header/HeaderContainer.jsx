/**
 * ************************************
 * @module  HeaderContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the header
 * ************************************
 */

// dependencies
import React from "react";

// components
import TitleComponent from "./components/TitleComponent.jsx";

// utilities

// interfaces & types

// component
export default function HeaderContainer () {
  return (
    <div id='HeaderContainer'>
      <p>-HeaderContainer</p>
      <TitleComponent/>
    </div>
  )
}