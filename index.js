function init() {
  let recipeDetailsPartial = document.
    getElementById('recipe-details-partial').innerHTML;
  let recipeFormPartial = document.
    getElementById('recipe-form-partial').innerHTML;

  Handlebars.registerPartial('recipeDetailsPartial', recipeDetailsPartial);
  Handlebars.registerPartial('recipeFormPartial', recipeFormPartial);

  Handlebars.registerHelper('displayIngredient', function () {
    return new Handlebars.SafeString(this.ingredient);
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()

  let recipeFormTemplate = Handlebars
    .compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = recipeFormTemplate();
})

function createRecipe() {
  event.preventDefault();

  let recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: ingredientValues(document.getElementsByName('ingredients')),
  }

  let template = Handlebars
    .compile(document.getElementById('recipe-template').innerHTML);

  let result = template(recipe);

  document.getElementById('main').innerHTML = result;
}

function displayEditForm() {
}

function ingredientValues(ingredients) {
  let result = [];

  ingredients.forEach((currentValue) => {
    result.push({ingredient: currentValue.value});
  });

  return result;
}
