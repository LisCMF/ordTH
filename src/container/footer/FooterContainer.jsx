/**
 * ************************************
 * @module  FooterContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component renders footer
 * ************************************
 */

// dependencies
import React from "react";

// components
import SignatureComponent from "./components/SignatureComponent.jsx";
import ScrollComponent from "./components/ScrollComponent.jsx";

// utilities

// interfaces & types

// component
export default function FooterContainer () {
  return (
    <div id='FooterContainer'>
      <p>FooterContainer</p>
      <SignatureComponent/>
      <ScrollComponent/>
    </div>
  )
}