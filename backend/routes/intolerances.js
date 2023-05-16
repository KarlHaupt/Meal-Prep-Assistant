const express = require('express');
const router = express.Router();

const { getIntolerances } = require('../controllers/intolerancesController');

router.route('/intolerance').post(getIntolerances);

module.exports = router;