function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial',
  document.querySelector('#recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial',
  document.querySelector('#recipe-form-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString("<li class='ingredient-show'>"+ this.value + "</li>")
    });

  var formTemplate = Handlebars.compile(document.getElementById(
    "recipe-form-template").innerHTML);
  var ingredients = [0,0,0,0,0];
  var blank_form = formTemplate({ingredients: ingredients});
  document.querySelector("#main").innerHTML += blank_form;

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  //get values
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredients = document.getElementsByName('ingredients');

  //create template
  var recipeTemplate = Handlebars.compile(document.getElementById(
    'recipe-template').innerHTML);

  var recipeHTML = recipeTemplate({name: name, description: description,
    ingredients: ingredients});

  document.querySelector('#main').innerHTML = recipeHTML;
}

function displayEditForm() {
  var name = document.getElementById('recipe-name').innerHTML;
  var description = document.getElementById('recipe-description').innerHTML;
  var ingredients = document.querySelectorAll('li');

  var formTemplate = Handlebars.compile(document.getElementById(
    "recipe-form-template").innerHTML);
  document.querySelector("#main").innerHTML += formTemplate({name: name,
  description: description, ingredients: ingredients});
}

function updateRecipe() {
  //get values
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredients = document.getElementsByName('ingredients');

  //create template
  var recipeTemplate = Handlebars.compile(document.getElementById(
    'recipe-template').innerHTML);

  var recipeHTML = recipeTemplate({name: name, description: description,
    ingredients: ingredients});

  document.querySelector("#main").innerHTML = recipeHTML;
}
