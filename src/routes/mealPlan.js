const express = require('express');
const router = express.Router();

const { generateMealPlan, getRecipe } = require('../controllers/mealPlanController');

router.post('/generateMealPlan', generateMealPlan);
router.post('/getRecipe', getRecipe);

module.exports = router;