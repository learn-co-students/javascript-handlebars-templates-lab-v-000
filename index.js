function init() {
  var formTemplate = document.getElementById('recipe-form-template').innerHTML;
  var template = Handlebars.compile(formTemplate);

  document.getElementsByTagName('main')[0].innerHTML = template(
    { 'submitAction' : 'createRecipe()'}
  );

  Handlebars.registerHelper('displayIngredient', function(ingredients) {
    return "";
  });

  Handlebars.registerPartial('recipeDetailsPartial',
    document.getElementById('recipe-details-partial').innerHTML
  );

  Handlebars.registerPartial('recipeFormPartial',
    document.getElementById('recipe-details-partial').innerHTML
  );
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);

  document.getElementsByTagName('main')[0].innerHTML = template(
    { 'submitAction' : 'createRecipe()'}
  );
}

function updateRecipe() {
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);

  document.getElementsByTagName('main')[0].innerHTML = template(
    { 'submitAction' : 'createRecipe()'}
  );
}

function displayEditForm() {
  var formTemplate = document.getElementById('recipe-form-template').innerHTML;
  var template = Handlebars.compile(formTemplate);

  document.getElementsByTagName('main')[0].innerHTML = template(
    { 'submitAction' : 'createRecipe()'}
  );
}
