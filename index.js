function createRecipe() {
  var recipe = getRecipeInfo();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML += template(recipe);
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  var name = document.getElementById('nameHeader').innerText;
  var description = document.getElementById('recipe-description').innerText;
  var ingredientNodes = document.getElementsByName('ingredientsList');
  var ingredients = addIngredients(ingredientNodes);

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  var recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);

  document.getElementById('main').innerHTML += template(recipe)
}

function getRecipeInfo() {
  var ingredientNodes = document.getElementsByName("ingredients");
  var ingredients = addIngredients(ingredientNodes)
  
  var description = document.getElementById('recipeDescription').value;
  var name = document.getElementById('name').value;
  var recipe = {name, description, ingredients};

  return recipe
}

function addIngredients(nodes) {
  var ingredients = [];

  for(var i = 0; i < nodes.length; i++) {
    var ing = nodes[i].value;
    if(ing !== ""){
      ingredients.push(ing)
    }
  }
  return ingredients
}

function handlebarsRegistrations() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(
      "<li name='ingredientsList'>" + ingredient + "</li>"
    );
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
}

function startingForm() {
  var formTemplate = document.getElementById('recipe-form-template').innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML += template({'submitAction': 'createRecipe()'});
}
/* RUN THE ABOVE CODE  BELOW THIS LINE */
function init() {
  handlebarsRegistrations();
  startingForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})