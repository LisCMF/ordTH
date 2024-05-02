// dependencies 
import React from "react";
import { createRoot } from 'react-dom/client';
import {io} from 'socket.io-client';


// import static files
import {test} from './test.ts';

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
    <p>"XXX in main.js file !!!"</p>
    <MainContainer/>
  </>
)