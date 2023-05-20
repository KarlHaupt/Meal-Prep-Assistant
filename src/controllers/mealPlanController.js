const MealPlan = require("../lib");

const mealPlan = new MealPlan("need apikey");

const generateMealPlan = catchAsyncError(async (req, res, next) => {
    const { targetCalories, diet, excludeItem } = req.body;

    return await mealPlan.generateMealPlan(targetCalories, diet, excludeItem)
});

const getRecipe = catchAsyncError(async (req, res, next) => {
    return await mealPlan.getRecipe("ID to get from somewhere");
});

module.exports = {
    generateMealPlan,
    getRecipe
}
