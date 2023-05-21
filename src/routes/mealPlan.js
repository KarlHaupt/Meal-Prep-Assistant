const express = require('express');
const router = express.Router();

const { mealPlanView, generateMealPlan, getRecipe } = require('../controllers/mealPlanController');

router.get('/mealplan', mealPlanView)
router.post('/generateMealPlan', generateMealPlan);
router.post('/getRecipe', getRecipe);

module.exports = router;