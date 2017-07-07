function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });
  displayNewForm();
}

function displayNewForm() {
  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var html = template({onsubmit: 'createRecipe(); return false;'});
  document.getElementById('main').innerHTML = html;
}

function createRecipe() {
  var recipe = getRecipeValues();
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var html = template(recipe);
  document.getElementById('main').innerHTML += html;
}

function updateRecipe() {
  var recipe = getRecipeValues();
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var html = template(recipe);
  displayNewForm();
  document.getElementById('main').innerHTML += html;
}

function getRecipeValues() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredientsNodes = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].value);
  }

  var recipe = { name, description, ingredients };
  return recipe;
}

function displayEditForm() {
  var name = document.getElementById('recipeName').innerText;
  var description = document.getElementById('recipeDescription').innerText;

  var ingredientsNodes = document.getElementsByName('ingredientsList');
  var ingredients = [];
  for (var i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].value);
  }

  var recipe = { name, description, ingredients, onsubmit: 'updateRecipe(); return false;' };

  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var html = template(recipe);
  document.getElementById('main').innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
