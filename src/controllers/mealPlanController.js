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

    return await mealPlan.generateMealPlan(targetCalories, diet, excludeItem)
});

const getRecipe = catchAsyncError(async (req, res, next) => {
    return await mealPlan.getRecipe("ID to get from somewhere");
});

module.exports = {
    mealPlanView,
    myMealPlanView,
    generateMealPlan,
    getRecipe
}
