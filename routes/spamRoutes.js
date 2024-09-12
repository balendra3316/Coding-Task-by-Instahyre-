const express = require('express');
const { markSpam } = require('../controllers/spamController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/mark', authMiddleware, markSpam);

module.exports = router;
