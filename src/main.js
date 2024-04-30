// import React from "react";
import {test} from './test.ts';
import {io} from 'socket.io-client';

// test connection with index.html
const body = document.querySelector('body');
const mainParr = document.createElement('p');
mainParr.innerText = 'XXX in main.js file !!!'
mainParr.style.color = 'coral'
body.appendChild(mainParr);

const socket = io();
socket.on('order_event', (data) => {
  console.log('Received order event', data);
});