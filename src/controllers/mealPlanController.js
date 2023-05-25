const MealPlan = require("../lib");
const catchAsyncError = require('../middlewares/catchAsyncError');
const path = require('path');

const mealPlan = new MealPlan("7f9400a0bef442a9a319690dd9645e0f");

const mealPlanView = (req, res) => {
    res.sendFile('create.html', { root: path.join(__dirname, '../views') });
}

const myMealPlanView = (req, res) => {
    res.sendFile('mealPlan.html', { root: path.join(__dirname, '../views') });
}

const generateMealPlan = catchAsyncError(async (req, res, next) => {
    const { targetCalories, diet, excludeItem } = req.body;

    const plan = await mealPlan.generateMealPlan(targetCalories, diet, excludeItem);

    session = req.session;
    session.plan = plan

    res.status(200).json({
        success: true,
        message: 'Generated Meal Plan Successfully',
        redirectPath: "/api/v1/myMealPlan",
        plan: plan
    });
});

const getMealPlan = catchAsyncError(async (req, res, next) => {
    session = req.session;
    const plan = session.plan

    res.status(200).json({
        success: true,
        message: 'Got Meal Plan Successfully',
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
    getRecipe,
    getMealPlan
}
