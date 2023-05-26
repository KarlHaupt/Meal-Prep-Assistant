const axios = require('axios');

module.exports = class MealPlan {
    constructor(apiKey) {
        this.baseUrl = 'https://api.spoonacular.com';
        this.apiKey = apiKey;
    }

    async generateMealPlan(targetCalories=2000, diet='', exclude='') {
        let timeFrame = 'week'
        let url = `${this.baseUrl}/mealplanner/generate?apiKey=${this.apiKey}&targetCalories=${targetCalories}&timeFrame=${timeFrame}`;
        if (diet){
            url += `&${diet}`;
        }
        if (exclude){
            url += `&${exclude}`;
        }

        const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36' }}
        const { data } = await axios.get(url, options);
        return data;
    }

    async getRecipe(id) {
        const { data } = await axios.get(`${this.baseUrl}/recipes/${id}/information?apiKey=${this.apiKey}`)
        return(data)
    }
};