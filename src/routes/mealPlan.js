const express = require('express');
const router = express.Router();

const { mealPlanView, myMealPlanView, generateMealPlan, getRecipe } = require('../controllers/mealPlanController');

router.get('/mealPlan', mealPlanView);
router.get('/myMealPlan', myMealPlanView);
router.post('/generateMealPlan', generateMealPlan);
router.post('/getRecipe', getRecipe);

module.exports = router;