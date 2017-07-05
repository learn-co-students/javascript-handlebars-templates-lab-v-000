function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', ingredient => {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  var name = document.getElementById('nameHeader').innerText;
  var description = document.getElementById('recipeDescription').innerText;
  var ingredientsNodes = document.getElementsByName("ingredientsList");
  var ingredients = [];

  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText);
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  var recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function createRecipe() {
  var recipe = recipeAttributes();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = recipeAttributes();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function recipeAttributes() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for (var i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].value);
  }

  var recipe = {name, description, ingredients};
  return recipe;  
}