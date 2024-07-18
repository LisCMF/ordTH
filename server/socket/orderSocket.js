const { getOrderEvents } = require('../services/orderService');

const setupSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New connection');

    let elapsed = 0;

    const ticker = setInterval(() => {
      if (elapsed >= 330) {
        console.log('All order events sent');
        clearInterval(ticker);
        return;
      }

      const toSend = getOrderEvents(elapsed);

      if (toSend.length > 0) {
        io.emit('order_event', toSend);
      }

      elapsed += 1;
    }, 1000);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      clearInterval(ticker);
    });
  });
};

module.exports = setupSocket;
