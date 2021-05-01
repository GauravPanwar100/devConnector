const express = require('express');
const router = express.Router();

/**
 * @route   GET api/posts
 * @desc    Test route
 * @access  Public (means need token for authorization this route or not)
 */
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
