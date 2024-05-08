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
import TitleComponent from "./components/TitleComponent";

// component
export default function HeaderContainer (): JSX.Element {
  return (
    <div id='HeaderContainerDiv'>
      <TitleComponent/>
    </div>
  )
}