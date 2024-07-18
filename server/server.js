const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const routes = require('./routes');
const setupSocket = require('./socket/orderSocket');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: /http:\/\/localhost/ }
});

const PORT = 4000;

app.use(express.static(path.resolve(__dirname, '../src')));
app.use('/', routes);

setupSocket(io);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});