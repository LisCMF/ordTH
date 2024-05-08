/**
 * ************************************
 * @module  TitleComponent
 * @author  LisCMF
 * @date    02/02/2024
 * @description Component that renders the header
 * ************************************
 */

// images
const icon:string = '../../../assets/images/order_manger_icon.PNG';

// component
export default function TitleComponent () {
  return (
    <>
      <img id="imageIcon" alt='Image (with the text OM) used as Order Manager icon' src={icon}/>
    </>
  )
}