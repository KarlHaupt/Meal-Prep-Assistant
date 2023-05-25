function renderMealPlan() {
  //TO DO: This will be passed in as a response from the external api call
  let jsonData = {
    week: {
      monday: {
        meals: [
          {
            id: 636026,
            imageType: "jpg",
            title: "Breakfast Biscuits and Gravy",
            readyInMinutes: 45,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/breakfast-biscuits-and-gravy-636026",
          },
          {
            id: 1697625,
            imageType: "jpg",
            title:
              "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
            readyInMinutes: 25,
            servings: 2,
            sourceUrl:
              "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625",
          },
          {
            id: 631894,
            imageType: "jpg",
            title: "A Fish That's Not Really A Fish",
            readyInMinutes: 45,
            servings: 6,
            sourceUrl:
              "https://spoonacular.com/a-fish-thats-not-really-a-fish-631894",
          },
        ],
        nutrients: {
          calories: 2967.61,
          protein: 115.98,
          fat: 161.36,
          carbohydrates: 260.11,
        },
      },
      tuesday: {
        meals: [
          {
            id: 636026,
            imageType: "jpg",
            title: "Breakfast Biscuits and Gravy",
            readyInMinutes: 45,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/breakfast-biscuits-and-gravy-636026",
          },
          {
            id: 469862,
            imageType: "jpg",
            title: 'The "Even my picky bf will eat it" Salad',
            readyInMinutes: 25,
            servings: 2,
            sourceUrl:
              "https://spoonacular.com/the-even-my-picky-bf-will-eat-it-salad-469862",
          },
          {
            id: 645884,
            imageType: "jpg",
            title: "Grilled Spareribs With Birmingham Bbq Sauce",
            readyInMinutes: 45,
            servings: 6,
            sourceUrl:
              "https://spoonacular.com/grilled-spareribs-with-birmingham-bbq-sauce-645884",
          },
        ],
        nutrients: {
          calories: 3034.57,
          protein: 129.59,
          fat: 227.41,
          carbohydrates: 121.01,
        },
      },
      wednesday: {
        meals: [
          {
            id: 632928,
            imageType: "jpg",
            title: "Asparagus Eggs Benedict",
            readyInMinutes: 30,
            servings: 2,
            sourceUrl: "https://spoonacular.com/asparagus-eggs-benedict-632928",
          },
          {
            id: 668492,
            imageType: "jpg",
            title: "Creamy zucchini and ham pasta",
            readyInMinutes: 25,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/creamy-zucchini-and-ham-pasta-668492",
          },
          {
            id: 645884,
            imageType: "jpg",
            title: "Grilled Spareribs With Birmingham Bbq Sauce",
            readyInMinutes: 45,
            servings: 6,
            sourceUrl:
              "https://spoonacular.com/grilled-spareribs-with-birmingham-bbq-sauce-645884",
          },
        ],
        nutrients: {
          calories: 2978.06,
          protein: 126.67,
          fat: 213.21,
          carbohydrates: 132.99,
        },
      },
      thursday: {
        meals: [
          {
            id: 636026,
            imageType: "jpg",
            title: "Breakfast Biscuits and Gravy",
            readyInMinutes: 45,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/breakfast-biscuits-and-gravy-636026",
          },
          {
            id: 642281,
            imageType: "jpg",
            title: "Eggplant Caprese Stack Appetizers",
            readyInMinutes: 30,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/eggplant-caprese-stack-appetizers-642281",
          },
          {
            id: 1697583,
            imageType: "jpg",
            title: "Crispy Ravioli Formaggi",
            readyInMinutes: 30,
            servings: 2,
            sourceUrl:
              "https://spoonacular.com/crispy-ravioli-formaggi-1697583",
          },
        ],
        nutrients: {
          calories: 3016.61,
          protein: 98.1,
          fat: 223.63,
          carbohydrates: 158.25,
        },
      },
      friday: {
        meals: [
          {
            id: 636026,
            imageType: "jpg",
            title: "Breakfast Biscuits and Gravy",
            readyInMinutes: 45,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/breakfast-biscuits-and-gravy-636026",
          },
          {
            id: 776505,
            imageType: "jpg",
            title: "Sausage & Pepperoni Stromboli",
            readyInMinutes: 28,
            servings: 6,
            sourceUrl:
              "https://spoonacular.com/sausage-pepperoni-stromboli-776505",
          },
          {
            id: 648983,
            imageType: "jpg",
            title: "Knishes - Potato Filling",
            readyInMinutes: 45,
            servings: 1,
            sourceUrl: "https://spoonacular.com/knishes-potato-filling-648983",
          },
        ],
        nutrients: {
          calories: 2998.01,
          protein: 90.55,
          fat: 210.07,
          carbohydrates: 187.45,
        },
      },
      saturday: {
        meals: [
          {
            id: 636026,
            imageType: "jpg",
            title: "Breakfast Biscuits and Gravy",
            readyInMinutes: 45,
            servings: 4,
            sourceUrl:
              "https://spoonacular.com/breakfast-biscuits-and-gravy-636026",
          },
          {
            id: 1697583,
            imageType: "jpg",
            title: "Crispy Ravioli Formaggi",
            readyInMinutes: 30,
            servings: 2,
            sourceUrl:
              "https://spoonacular.com/crispy-ravioli-formaggi-1697583",
          },
          {
            id: 657312,
            imageType: "jpg",
            title: "Pumpkin gnocchi with basil and Parmesan",
            readyInMinutes: 45,
            servings: 6,
            sourceUrl:
              "https://spoonacular.com/pumpkin-gnocchi-with-basil-and-parmesan-657312",
          },
        ],
        nutrients: {
          calories: 2999.51,
          protein: 97.53,
          fat: 202.96,
          carbohydrates: 200.21,
        },
      },
      sunday: {
        meals: [
          {
            id: 635964,
            imageType: "jpg",
            title: "Bread Omlette",
            readyInMinutes: 45,
            servings: 1,
            sourceUrl: "https://spoonacular.com/bread-omlette-635964",
          },
          {
            id: 1697583,
            imageType: "jpg",
            title: "Crispy Ravioli Formaggi",
            readyInMinutes: 30,
            servings: 2,
            sourceUrl:
              "https://spoonacular.com/crispy-ravioli-formaggi-1697583",
          },
          {
            id: 641893,
            imageType: "jpg",
            title: "Easy Cheesy Pizza Casserole",
            readyInMinutes: 45,
            servings: 6,
            sourceUrl:
              "https://spoonacular.com/easy-cheesy-pizza-casserole-641893",
          },
        ],
        nutrients: {
          calories: 2952.09,
          protein: 133.88,
          fat: 179.75,
          carbohydrates: 200.43,
        },
      },
    },
  };

  let menu = jsonData.week;

  console.log('Inside');

  for (let day in menu) {
    let container = document.getElementById(`meal-table--${day}`);
    let table = document.createElement("table");
    let cols = ["Meal", "Title", "Prep Time", "Servings", " "];
    let meals = menu[day].meals;

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    cols.forEach((item) => {
      let th = document.createElement("th");
      th.innerText = item;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.append(tr);

    meals.forEach((meal, index) => {
      let tr = document.createElement("tr");
      let mealType = ["Breakfast", "Lunch", "Dinner"];
      let mealColumn = document.createElement("td");
      mealColumn.innerText = mealType[index];
      tr.appendChild(mealColumn);

      let vals = ["title", "readyInMinutes", "servings", "sourceUrl"];

      vals.forEach((heading) => {
        let td = document.createElement("td");
        if (heading === "sourceUrl") {
          td.innerHTML = `<a href=${meal[heading]}><button>Recipe</button></a>`;
        } else {
          td.innerHTML = meal[heading];
        }
        tr.appendChild(td);
      });

      table.appendChild(tr);
    });
    container.appendChild(table);
  }
}

// Window.onload = renderMealPlan;
