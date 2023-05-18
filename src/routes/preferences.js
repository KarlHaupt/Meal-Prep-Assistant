const express = require('express');
const router = express.Router();

const { getPreferences } = require('../controllers/preferencesController');

router.route('/getPreferences').get(getPreferences);

module.exports = router;