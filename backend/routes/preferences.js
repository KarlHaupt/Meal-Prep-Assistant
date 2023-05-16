const express = require('express');
const router = express.Router();

const { getPreferences } = require('../controllers/preferencesController');

router.route('/preference').post(getPreferences);

module.exports = router;