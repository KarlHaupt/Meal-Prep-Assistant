const express = require('express');
const router = express.Router();

const { getIntolerances, addIntolerance, getAllIntolerances } = require('../controllers/intolerancesController');

router.route('/getAllIntolerances').get(getAllIntolerances);
router.route('/getIntolerances').get(getIntolerances);
router.route('/addIntolerance').post(addIntolerance);

module.exports = router;