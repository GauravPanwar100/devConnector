const express = require('express');
const router = express.Router();

/**
 * @route   GET api/auth
 * @desc    Test route
 * @access  Public (means need token for authorization this route or not)
 */
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
