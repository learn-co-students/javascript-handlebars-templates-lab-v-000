function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})

}


function createRecipe() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredientsList = document.getElementsByName("ingredients")

  var ingredients = []
  for(var i = 0; i < ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].innerText)
  }

  var recipe = {name, ingredients, description}

  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").value
  var description = document.getElementById("recipeDescription").value
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredientsList = document.getElementsByName("ingredients")

  var ingredients = []
  for(var i = 0; i < ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].innerText)
  }

  var recipe = {name, ingredients, description}
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
