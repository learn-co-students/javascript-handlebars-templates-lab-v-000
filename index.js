function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', '{{name}}')
  Handlebars.registerPartial('recipeFormPartial', '{{name}}')
  Handlebars.registerHelper('displayIngredient', function() {
  return document.getElementById("recipe-form-template").ingredients[ingredient]
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

 
function createRecipe() {
  var recipe = {
    name: document.getElementsByName("name")[0],
    description: document.getElementsByName("description")[0],
    ingredients: document.getElementsByName("ingredients")
  }
  displayEditForm();
  return document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
  return Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  //code
}

