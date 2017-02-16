function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li name="ingredientsList">' + this + '</li>');
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);

  displayForm();

}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function createRecipe() {
  var recipe = recipeValues();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementsByName('main').innerHTML = template(recipe);
}

function updateRecipe() {
  var recipe = recipeValues();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementsByName('main').innerHTML = template(recipe);
}

function displayEditForm() {
  var name = document.getElementById('name-header');
  var description = document.getElementById('description-display');
  var ingredientsList = document.getElementsByName('ingredientsList');
  var ingredients = [];
  for (var i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].value !== "") {
      ingredients.push(ingredientsList[i].value);
    }
  }
  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'};

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);

}
function displayForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function recipeValues() {
  var ingredientsList = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].value !== "") {
      ingredients.push(ingredientsList[i].value);
    }
  }
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var recipe = {name, ingredients, description};
  return recipe;
}
