function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form'))
  Handlebars.registerHelper('displayIngredient', (ingredient) => {
    return `${ingredient.name}`;
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
function createRecipe() {
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
}
