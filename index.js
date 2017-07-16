function createRecipe() {
  var recipe = getRecipeValues()
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("recipeName").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNode = document.getElementsByName("ingredientsList")

  var ingredients = []
  for (let i = 0; i < length.ingredientsNode; i++) {
    ingredients.push(ingredientsNode[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: "updateRecipe()"}

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeValues()
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += template(recipe)
}

function getRecipeValues() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredientsNode = document.getElementsByName("ingredients")

  var ingredients = []
  for (let i = 0; i < ingredientsNode.length; i++) {
    ingredients.push(ingredientsNode[i].value)
  }

  var recipe = {name, description, ingredients}
  return recipe
}

function initForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = formTemplate({"submitAction": "createRecipe()"})
}

function initHandlebars() {
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  initHandlebars()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
