const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');

const chaptersHandler = require('./handler/chapters');

module.exports = router;