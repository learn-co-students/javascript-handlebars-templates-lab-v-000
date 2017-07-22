  var name;
  var description;
  var ingredients=["","","","",""];

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li>" + this + "</li>");
  })

  function renderMain() {
    ingredients=["","","","",""];
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var html = template({name:"", description: '', ingredients: ingredients, submitFn: 'createRecipe'});
    document.getElementsByTagName("main")[0].innerHTML = html;
  }

  renderMain();
}


function createRecipe() {
  name = document.getElementById('name').value;
  description = document.getElementById('description').value
  ingredients = document.getElementsByName('ingredients').values

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({name:name, description: description, ingredients: ingredients});
  document.getElementsByTagName("main")[0].innerHTML = html;
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({name:"", description: ''});
  document.getElementsByTagName("main")[0].innerHTML = html;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template({name:name, description: description, ingredients: ingredients, submitFn: 'updateRecipe'});
  document.getElementsByTagName("main")[0].innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
