function init() {
  HandleBarsSetup()
  initSetup()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function HandleBarsSetup() {
	Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
	Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
	Handlebars.registerHelper("displayIngredient", function(ingredient) {
		return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
	})
}

function initSetup() {
	var recipeForm = document.getElementById("recipe-form-template").innerHTML
	var compiledTemplate = Handlebars.compile(recipeForm)
	document.getElementById("main").innerHTML = compiledTemplate({"Submit": "createRecipe()"})
}

function createRecipe() {
	var recipe = gatherRecipeInfo()

	var recipeTemplate = document.getElementById("recipe-template").innerHTML
	var compiledTemplate = Handlebars.compile(recipeTemplate)
	document.getElementById("main").innerHTML = compiledTemplate(recipe)
}

function gatherRecipeInfo() {
	var name = document.getElementById("name").value
	var description = document.getElementById("description").value
	var ingredientsNodes = document.getElementsByName("ingredients")

	var ingredients = []

	for (var i = 0; i < ingredientsNodes.length; i++) {
		if (ingredientsNodes[i].value !== "") {
			ingredients.push(ingredientsNodes[i].value)
		}
	}

	var completeRecipe = {name, description, ingredients}
	return(completeRecipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []

  for (var i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = gatherRecipeInfo()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
