function createRecipe() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredientNodes = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i = 0; i < ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].value);
  }
  var recipe = {name, description, ingredients}
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredientNodes = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i = 0; i < ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].value);
  }
  var recipe = {name, description, ingredients}
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function displayEditForm(){
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredientNodes = document.getElementsByName('ingredientList');
  var ingredients = [];
  for (var i = 0; i < ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].innerText);
  }
  var recipe = {name, description, ingredients, 'submitAction': 'updateRecipe()'}
  document.getElementById('main').innerHTML = recipeTemplate(recipe);
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString(ingredient);
  })

  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementsByTagName('main')[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
