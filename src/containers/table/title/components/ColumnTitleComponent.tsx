/**
 * ************************************
 * @module  TitleTableContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the title of each column
 * ************************************
 */

// interfaces & types
interface ColumnTitleComponentProps {
  titleText: string; 
  columnClass: string;
}

// component
export default function ColumnTitleComponent ({titleText, columnClass}: ColumnTitleComponentProps) {
  return (
    <th id={titleText} className={columnClass + ' thColumnTitleComponent'}>
      {titleText}
    </th>
  );
};