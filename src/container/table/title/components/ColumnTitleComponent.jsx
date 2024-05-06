/**
 * ************************************
 * @module  TitleTableContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the title of each column
 * ************************************
 */

// dependencies
import React from "react";

// components

// utilities

// interfaces & types

// component
export default function ColumnTitleComponent ({titleText, columnClass}) {
  return (
    <th id={titleText} className={columnClass + ' thColumnTitleComponent'}>
      {titleText}
    </th>
  );
};