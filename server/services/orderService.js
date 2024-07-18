const loadData = require('../utils/loadData');
const byTime = loadData();

const getOrderEvents = (elapsed) => {
  return byTime[String(elapsed)] || [];
};

module.exports = { getOrderEvents };
