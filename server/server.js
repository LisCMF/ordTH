// dependencies
const fs = require('fs');
const app = require('express')();
const http = require('http').createServer(app);
const path = require('path');

const localhostRegex = /http:\/\/localhost/
const io = require('socket.io')(http, {
    cors: { origin: localhostRegex }
  });

const PORT = 4000;
const DATA_FILE = path.join(__dirname, '../data/order-data.json');

// Initialize order data.
const orders = JSON.parse(fs.readFileSync(DATA_FILE));

// object to hold array of order made on timestamp (second)
// {317:[{order event}, {order event}]}
const byTime = {};

// add orders by the timestamp to byTime properties assigned to arrays
orders.forEach(order => {
  const timestamp = String(order.sent_at_second);
  if (byTime[timestamp]) {
    byTime[timestamp].push(order);
  } else {
    byTime[timestamp] = [order];
  }
});


// route handlers
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/index.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, '../src/index.js'));
});

/**
 * This server is a very naive implementation of a order service.
 *
 * It waits for a new connection, upon which it iterates through a
 * JSON file of sample order data and sends it down to the connected
 * client. The server will restart the order events for a new connection,
 * and stops after it receives a disconnect. Feel free to extend this if needed,
 * it's meant to be quite bare-bones :)
 */


io.on('connection', (socket) => {
  console.log('New connection');

  let elapsed = 0;

  const ticker = setInterval(() => {
    if (elapsed >= 330) {
      console.log('All order events sent');
      clearInterval(ticker);
      return;
    }

    // store the string of arrays with the timestamp that match in the elapsed time
    const toSend = byTime[String(elapsed)];

    // check if toSend is assign and not empty
    if (toSend && toSend.length > 0) {
      // send the toSend
      io.emit('order_event', toSend);
    }

    elapsed += 1;
  }, 1000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(ticker);
  });
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
