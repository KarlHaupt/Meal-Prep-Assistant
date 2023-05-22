const MealPlan = require("../lib");
const catchAsyncError = require('../middlewares/catchAsyncError');
const path = require('path');

const mealPlan = new MealPlan("need apikey");

const mealPlanView = (req, res) => {
    res.sendFile('create.html', { root: path.join(__dirname, '../views') });
}

const myMealPlanView = (req, res) => {
    res.sendFile('meal-plan.html', { root: path.join(__dirname, '../views') });
}

const generateMealPlan = catchAsyncError(async (req, res, next) => {
    const { targetCalories, diet, excludeItem } = req.body;

    const plan = await mealPlan.generateMealPlan(targetCalories, diet, excludeItem)

    res.status(200).json({
        success: true,
        message: 'Generated Meal Plan Successfully',
        redirectPath: "http://localhost:8080/api/v1/myMealPlan",
        plan: plan
    });
});

const getRecipe = catchAsyncError(async (req, res, next) => {
    const { recipeId } = req.body;

    const recipe = await mealPlan.getRecipe(recipeId);

    res.status(200).json({
        success: true,
        message: 'Get Recipe Successfully',
        recipe: recipe
    });
});

module.exports = {
    mealPlanView,
    myMealPlanView,
    generateMealPlan,
    getRecipe
}
