function handlebarsSetup() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById(
    "recipe-details-partial"
  ).innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById(
    "recipe-form-partial"
  ).innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    var result = '<li name="ingredientsList">' + ingredient + '</li>'
    return new Handlebars.SafeString(result)
  })
}

function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementById("main").innerHTML = template({submitAction: "createRecipe()"})
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []

  // ingredientsNodes.forEach((ingredient, index) => {
  //   if(ingredient.value !== "") {
  //     ingredients.push(ingredient.value)
  //   }
  // })
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, description, ingredients}

  return recipe
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []

  // ingredientsNodes.forEach(ingredient => ingredients.push(ingredient.innerText))
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: "updateRecipe()"}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function init() {
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
