const express = require('express');
const router = express.Router();

const { getPreferences, addPreference, getAllPreferences } = require('../controllers/preferencesController');

router.route('/getAllPreferences').get(getAllPreferences);
router.route('/getPreferences').get(getPreferences);
router.route('/addPreference').post(addPreference)

module.exports = router;