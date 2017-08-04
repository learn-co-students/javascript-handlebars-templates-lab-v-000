function init() {
  handlebarsInit()
  formInit()
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = recipeValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = recipeValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function recipeValues() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = []

  var allIngredients = document.getElementsByName("ingredients")
  for(var i=0; i < allIngredients.length; i++) {
    if(allIngredients[i].value !== "") {
      ingredients.push(allIngredients[i].value)
    }
  }

  var recipe = {name, ingredients, description}

  return(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredients = []

  var allIngredients = document.getElementsByName("ingredientsList")
  for(var i=0; i < allIngredients.length; i++) {
    if(allIngredients[i].value !== "") {
      ingredients.push(allIngredients[i].innerText)
    }
  }

  var recipe = {name, ingredients, description, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function handlebarsInit() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '<li>')
  })
}

function formInit() {
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}
