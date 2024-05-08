/**
 * ************************************
 * @module  CountComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders order count
 * ************************************
 */

// interfaces & types
interface CountComponentProps {
  orderCount: string; 
}

// component
export default function CountComponent ({ orderCount }: CountComponentProps): JSX.Element {
  return (
    <>
      <div id='CountComponentDiv'>
        <p>ORDERS:<span>{orderCount}</span></p>
      </div> 
    </>
  )
}