const path = require('path');

const getRoot = (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/index.html'));
};

const getHealth = (req, res) => {
  res.send('ok');
};

const getIndexJS = (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, '../../src/index.js'));
};

module.exports = { getRoot, getHealth, getIndexJS };
