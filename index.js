function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString(ingredient)
  })
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
  document.getElementsByTagName("main")[0].innerHTML += result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('recipeDescription').value;
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].value)
  }
  var recipe = {name, description, ingredients}
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  var recipeHTML = template(recipe);
  document.getElementById('main').innerHTML = recipeHTML;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
  document.getElementById("edit-form").innerHTML += result;
}

function updateRecipe() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('recipeDescription').value;
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].value)
  }
  var recipe = {name, description, ingredients}
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  var recipeHTML = template(recipe);
  document.getElementById('main').innerHTML = recipeHTML;
}
