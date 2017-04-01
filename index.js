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

  let recipeFormTemplate = Handlebars
    .compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = recipeFormTemplate();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  // event.preventDefault();

  let recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: ingredientFieldValues(document.getElementsByName('ingredients')),
  }

  let template = Handlebars
    .compile(document.getElementById('recipe-template').innerHTML);

  let result = template(recipe);

  document.getElementById('main').innerHTML = result;
}

function displayEditForm() {
  // event.preventDefault();

  let recipe = {
    name: document.getElementById('name').innerHTML,
    description: document.getElementById('description').innerHTML,
    ingredients: ingredientValues(document.querySelectorAll('.ingredients')),
    onSubmit: "updateRecipe();"
  }

  let recipeFormTemplate = Handlebars
    .compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = recipeFormTemplate(recipe);
}

function updateRecipe() {
  let recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: ingredientFieldValues(document.getElementsByName('ingredients')),
  }

  let template = Handlebars
    .compile(document.getElementById('recipe-template').innerHTML);

  let result = template(recipe);

  document.getElementById('main').innerHTML = result;
}

function ingredientValues(ingredients) {
  let result = [];

  [...ingredients].forEach(e => result.push({ingredient: e.innerHTML}));

  return result;
}

function ingredientFieldValues(ingredients, method) {
  let result = [];

  [...ingredients].forEach(e => result.push({ingredient: e[method]}));

  return result;
}
