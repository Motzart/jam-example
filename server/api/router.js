const express = require('express');
const authRouter = require('./auth/authRouter');
const router = express.Router();

// Add auth router
authRouter(router);

module.exports = router;