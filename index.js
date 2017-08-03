function initForm() {
  const formTemplate = document.querySelector('#recipe-form-template').innerHTML;
  const template = Handlebars.compile(formTemplate);
  document.querySelector('main').innerHTML = template({
    submitAction: 'createRecipe()'
  });
}

function createRecipe() {
  const recipe = getRecipeVals();
  const recipeTemplate = document.querySelector('#recipe-template').innerHTML;
  const template = Handlebars.compile(recipeTemplate);
  document.querySelector('main').innerHTML = template(recipe);
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  const name = document.querySelector("#nameHeader").innerText;
  const description = document.querySelector("#recipeDescription").innerText;
  const ingredientsNodes = document.querySelectorAll('[name="ingredientsList"]');
  const ingredients = [];
  for (let i = 0; i < ingredientsNodes.length; i += 1) {
    ingredients.push(ingredientsNodes[i].innerText);
  }

  const recipe = {name, description, ingredients, submitAction: "createRecipe()"};

  const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  const template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function getRecipeVals() {
  const ingredientsNodes = document.querySelector('[name="ingredients"]');
  const ingredients = [];
  for (let i = 0; i < ingredientsNodes.length; i += 1) {
    if (ingredientsNodes[i].value !== '') {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const recipe = { name, ingredients, description };
  return(recipe);
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(`<li name="ingredientsList">${ingredient}</li>`);
  });
  Handlebars.registerPartial("recipeDetailsPartial", document.querySelector("#recipe-details-partial").innerHTML)
  Handlebars.registerPartial("recipeFormPartial", document.querySelector("#recipe-form-partial").innerHTML)
}

function init() {
  handlebarsSetup();
  initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})
