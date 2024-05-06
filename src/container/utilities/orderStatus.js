/**
 * ************************************
 * @module  orderStatus
 * @author  LisCMF
 * @date    02/02/2024
 * @description Utility function that assign a class to the cell base on their current order status
 * ************************************
 */

const orderStatus = (eventName) => {
    // assign a status class based on event name 
    return 'rowsStatus' + eventName;
}

export default orderStatus;