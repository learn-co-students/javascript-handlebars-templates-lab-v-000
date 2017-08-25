function registrations() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}

function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var compiledTemplate = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = compiledTemplate({'submitAction': 'createRecipe()'})
}

function init() {
  //put any page initialization/handlebars initialization here
  registrations();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  var recipe = getRecipe();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var compiledTemplate = Handlebars.compile(recipeTemplate);

  document.getElementById("main").innerHTML = compiledTemplate(recipe);
}

function updateRecipe() {
  var recipe = getRecipe();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var compiledTemplate = Handlebars.compile(recipeTemplate);

  document.getElementById("main").innerHTML = compiledTemplate(recipe);
}

function displayEditForm() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i = 0; i < ingredientsNodes.length; i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("nameHeader").innerHTML;
  var description = document.getElementById("recipeDescription").innerHTML;

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var compiledTemplate = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = compiledTemplate(recipe)
}

function getRecipe() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i = 0; i < ingredientsNodes.length; i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").innerHTML;
  var description = document.getElementById("description").innerHTML;

  var recipe = {name, description, ingredients};
  return recipe;
}
