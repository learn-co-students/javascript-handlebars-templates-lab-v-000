function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
    var recipe = getFormData()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  createRecipe()
}

function getFormData() {
  var ingredientsList = document.getElementsByName("ingredients"); //extracts ingredients from form
  var ingredients = [];
  for (let i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].value !== "") {
      ingredients.push(ingredientsList[i].value);
    }
  }
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var recipe = {name, ingredients, description}; //packages everything all up
  return recipe;
}

function displayEditForm() {
  var ingredientsList = document.getElementsByName("ingredientsList") //extracts ingredients from show page
  var ingredients = [];
  for (let i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].innerHTML !== "") {
      ingredients.push(ingredientsList[i].innerHTML);
    }
  }
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerHTML
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  var recipe = {name, description, ingredients, submitAction: `updateRecipe()`}
  document.getElementById("main").innerHTML = template(recipe)
}


function handlebarReg() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarReg()
  initForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
