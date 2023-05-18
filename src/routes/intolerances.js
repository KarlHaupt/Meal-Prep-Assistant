const express = require('express');
const router = express.Router();

const { getIntolerances, addIntolerance } = require('../controllers/intolerancesController');

router.route('/getIntolerances').get(getIntolerances);
router.route('/addIntolerance').get(addIntolerance);

module.exports = router;