function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("Ingredient: <span name='ingredients'>" + this.value + "</span><br>");
  });

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.querySelector("main").innerHTML = template({ingredients: ['','','','',''], submitFunctionName: 'createRecipe'});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

function createRecipe() {
  processForm();
}

function displayEditForm() {
  var name  = document.getElementById("name").innerText;
  var descr = document.getElementById("description").innerText;

  var ingredients = [];
  var nodeList = document.getElementsByName("ingredients");

  if (typeof nodeList.forEach === 'function')  // needed for mocha test to prevent .forEach error for some reason.
    nodeList.forEach(function(node) { ingredients.push(node.innerText) } );

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template({name: name, description: descr, ingredients: ingredients, submitFunctionName: 'updateRecipe'});
  document.querySelector("main").innerHTML = html;
}

function updateRecipe() {
  processForm();
}

function processForm() {
  var name        = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredients");

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({name: name, description: description, ingredients: ingredients});

  document.querySelector("main").innerHTML = html;
}
