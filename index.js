function recipeFromInputs() {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const ingredients = [
    {ingredient: document.getElementById('ingredient1').value},
    {ingredient: document.getElementById('ingredient2').value},
    {ingredient: document.getElementById('ingredient3').value},
    {ingredient: document.getElementById('ingredient4').value},
    {ingredient: document.getElementById('ingredient5').value}
  ];

  return {
    name:        name,
    description: description,
    ingredients: ingredients
  };
}

function recipeFromPage() {
  const name = document.querySelector('h1').innerHTML;
  const description = document.querySelector('h2').innerHTML;
  const ingredientsList = document.querySelector('ul').children;
  const ingredients = Array.prototype.map.call(ingredientsList, (li, i) => {
    return {ingredient: li.innerHTML};
  });

  return {
    name:        name,
    description: description,
    ingredients: ingredients
  };
}

function recipeFormTemplate(context) {
  const template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  return template(context);
}

function recipeTemplate(context) {
  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  return template(context);
}

function displayNewForm() {
  const formArea = document.getElementById('form-area');
  formArea.innerHTML = recipeFormTemplate({submitFunction: 'createRecipe'});
}

function displayEditForm() {
  const formArea = document.getElementById('form-area');
  const context = Object.assign(
    {},
    {submitFunction: "updateRecipe"},
    recipeFromPage()
  );
  formArea.innerHTML = recipeFormTemplate(context);
}

function createRecipe() {
  const recipeArea = document.getElementById('recipe-area');
  const recipe = recipeTemplate(recipeFromInputs());
  recipeArea.innerHTML = recipe;
}

function updateRecipe() {
  createRecipe();
}

function init() {
  const recipeDetailsPartial = document.getElementById('recipe-details-partial').innerHTML;
  const recipeFormPartial = document.getElementById('recipe-form-partial').innerHTML;
  Handlebars.registerPartial('recipeDetailsPartial', recipeDetailsPartial);
  Handlebars.registerPartial('recipeFormPartial', recipeFormPartial);
  Handlebars.registerHelper('displayIngredient', function(ingredientContext) {
    if (ingredientContext.ingredient !== '') {
      return new Handlebars.SafeString(`<li>${ingredientContext.ingredient}</li>`);
    }
  });

  displayNewForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
