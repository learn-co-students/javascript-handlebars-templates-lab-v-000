function init() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient)
  })

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var form = Handlebars.compile(recipeFormTemplate)
  document.getElementsByTagName("main")[0].innerHTML = form({"submitAction": "createRecipe()"})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function recipeValues() {
  var recipeName = document.getElementsByName("name").value
  var recipeDescription = document.getElementsByName("recipeDescription").value
  var recipeIngredients = Array.prototype.map.call(document.getElementsByName('ingredients'), function(ingredients) {
    return ingredients.value
  })
  return (recipeName, recipeDescription, recipeIngredients)
}

function createRecipe() {
  var recipe = recipeValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var recipeName = document.getElementsByName("recipeName").value
  var recipeDescription = document.getElementsByName("recipeDescription").value
  var recipeIngredients = Array.prototype.map.call(document.getElementsByName('ingredients'), function(ingredients) {
    return ingredients.value
  })
  var recipe = {recipeName, recipeDescription, recipeIngredients, submitAction: 'updateRecipe()'}
  var editRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = editRecipeTemplate(recipe)
}

function updateRecipe() {
  var recipe = recipeValues()
  var editRecipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = editRecipeTemplate(recipe)
}
