const express = require('express');
const { getRoot, getHealth, getIndexJS } = require('../controllers/orderController');
const router = express.Router();

router.get('/', getRoot);
router.get('/health', getHealth);
router.get('/index.js', getIndexJS);

module.exports = router;
