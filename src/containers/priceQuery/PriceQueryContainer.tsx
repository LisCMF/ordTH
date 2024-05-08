/**
 * ************************************
 * @module  PriceQueryContainer
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the filtering, query, and count of orders per price input
 * ************************************
 */

// components
import CountComponent from "./components/CountComponent";
import QueryComponent from "./components/QueryComponent";

// interfaces & types
interface PriceQueryContainerProps {
  orderCount: number;
  setTargetPrice: (price: number) => void; // import
}

// component
export default function PriceQueryContainer ({ orderCount, setTargetPrice } : PriceQueryContainerProps): JSX.Element {
  return (
    <div id='PriceQueryContainerDiv'>
      <CountComponent orderCount={`${orderCount}`}/>
      <QueryComponent setTargetPrice={setTargetPrice}/>
    </div>
  )
}