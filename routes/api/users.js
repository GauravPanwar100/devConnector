const express = require('express');
const router = express.Router();

/**
 * @route   GET api/users
 * @desc    Test route
 * @access  Public (means need token for authorization this route or not)
 */
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
