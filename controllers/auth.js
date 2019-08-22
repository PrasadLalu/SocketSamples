const express = require('express');
const router = express.Router();

const Auth = require('../routes/auth');
router.get('/api/test', Auth.test);


module.exports = router;