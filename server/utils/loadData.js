const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data/order-data.json');

const loadData = () => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const byTime = {};

  data.forEach(order => {
    const timestamp = String(order.sent_at_second);
    if (byTime[timestamp]) {
      byTime[timestamp].push(order);
    } else {
      byTime[timestamp] = [order];
    }
  });

  return byTime;
};

module.exports = loadData;