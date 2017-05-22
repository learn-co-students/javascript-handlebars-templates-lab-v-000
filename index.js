function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<strong>" + this + "</strong>")
  })

  var templateHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var mainElem = document.querySelector("main");
  mainElem.innerHTML += templateHTML;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredient");

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({name: name, description: description, ingredients: ingredients});

  var mainElem = document.querySelector("main");
  mainElem.innerHTML += html;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template({name: name, description: description, ingredients: ingredients});
}
