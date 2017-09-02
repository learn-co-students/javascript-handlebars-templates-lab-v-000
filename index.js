

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function setUpTemplates() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function registerHelpersAndPartials() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });
}

function init() {
  registerHelpersAndPartials();
  setUpTemplates();
}

function createRecipe() {
  let recipe = getRecipeInputs();
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function getRecipeInputs() {
  let ingredients = [];
  let ingredientsInputs = document.getElementsByName("ingredients")
  for (let i = 0; i < ingredientsInputs.length; i++) {
    ingredients.push(ingredientsInputs[i].value);
  }
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let recipeData = {name, ingredients, description};
  return recipeData;
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += template({ 'submitAction': 'editRecipe()' });
}

function editRecipe() {
  let recipe = getRecipeInputs();
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function updateRecipe() {
  let recipe = getRecipeInputs();
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}
