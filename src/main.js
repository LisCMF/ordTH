/**
 * ************************************
 * @module  main
 * @author  LisCMF
 * @date    02/02/2024
 * @description module that creates the root of the react application & initiate the rendering process
 * ************************************
 */


// dependencies 
import React from "react";
import { createRoot } from 'react-dom/client';
import {io} from 'socket.io-client';

// global styles
import './assets/style/style.scss';

// import container
import MainContainer from './container/MainContainer.jsx'

// stablish socket connection
const socket = io();
socket.on('order_event', (data) => {
  console.log('Received order event', data);
});

// connect to the root element
const root = createRoot(document.getElementById('root'));

// Render main React component 
root.render(
  <>
    <MainContainer/>
  </>
)