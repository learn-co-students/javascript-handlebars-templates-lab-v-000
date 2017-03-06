function initForm() {
  var form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML); 
  document.getElementsByTagName("main")[0].innerHTML = form({'submitAction': 'createRecipe()'}); 
}

function createRecipe() {
  var recipe = getRecipeVals(); 
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML); 
  document.getElementById("main").innerHTML = recipeTemplate(recipe); 
}

function updateRecipe() {
  var recipe = getRecipeVals(); 
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML); 
  document.getElementById("main").innerHTML = recipeTemplate(recipe); 
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText; 
  var description = document.getElementById("recipeDescription").innerText; 
  var ingredientItems = document.getElementsByName("ingredientsList"); 
  var ingredients = []; 
  for (var i = 0; i < ingredientItems.length; i++) {
    ingredients.push(ingredientItems[i].innerText) 
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML); 
  document.getElementById("main").innerHTML = recipeFormTemplate(recipe); 
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients"); 
  var ingredients = []; 
  for (var i = 0; i < ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value);  
    } 
  }
  var name = document.getElementById("name").value; 
  var description = document.getElementById("description").value; 
  var recipe = {name, description, ingredients}; 
  return(recipe); 

}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="inredientsList">' + ingredient + '</li>');  
  }); 
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML); 
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML); 
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup(); 
  initForm(); 
}
document.addEventListener("DOMContentLoaded", function(event) {
  init(); 
})
