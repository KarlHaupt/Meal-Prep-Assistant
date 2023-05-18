const express = require('express');
const router = express.Router();

const { getIntolerances } = require('../controllers/intolerancesController');

router.route('/getIntolerances').get(getIntolerances);

module.exports = router;