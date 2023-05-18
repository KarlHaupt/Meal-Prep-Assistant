const express = require('express');
const router = express.Router();

const { getPreferences, addPreference } = require('../controllers/preferencesController');

router.route('/getPreferences').get(getPreferences);
router.route('/addPreference').get(addPreference)

module.exports = router;