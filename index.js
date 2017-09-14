function initForm() {
  //put any page initialization/handlebars initialization here
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  var recipe = getRecipeVals();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("recipeName").innerText;
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsContent = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i = 0; i < ingredientsContent.length; i++) {
    ingredients.push(ingredientsList[i].innerText)
  }

  var recipe = {recipeName, recipeDescription, ingredients, submitAction: 'createRecipe()'}
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsContent = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i = 0; i < ingredientsContent.length; i++) {
    if(ingredientsContent[i].value !== "") {
      ingredients.push(ingredientsContent[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("recipeDescription").value
  var recipe = {name, description, ingredients}
  return recipe
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}
function init() {
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
