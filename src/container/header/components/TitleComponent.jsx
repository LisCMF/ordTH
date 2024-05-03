/**
 * ************************************
 * @module  TitleComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the header
 * ************************************
 */

// dependencies

import React from "react";


// images
const icon = '../../../assets/images/order_manger_icon.PNG';

// utilities

// interfaces & types

// component
export default function TitleComponent () {
  return (
    <>
      <img id="imageIcon" src={icon}/>
      <header id='TitleComponentHeader'></header>
    </>
  )
}