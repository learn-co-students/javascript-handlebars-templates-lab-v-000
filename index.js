function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredients = document.getElementsByName("ingredientsList").innerText
  var ingredientsArray = []
  for(var i = 0; i < ingredients; i++) {
    ingredientsArray.push(ingredients[i].innerText)
  }

  var recipe = {name, description, ingredientsArray, submitAction: 'createRecipe()'}
  var recipeTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function createRecipe() {
  var ingredients = document.getElementsByName("ingredients")
  var ingredientsArray = []
  for(var i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== "") {
      ingredientsArray.push(ingredients[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML += template(recipe)
}

function updateRecipe() {
  var ingredients = document.getElementsByName("ingredients")
  var ingredientsArray = []
  for(var i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== "") {
      ingredientsArray.push(ingredients[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
