function init() {
  HandleBarsSetup()
  initSetup()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function HandleBarsSetup() {
	Handlebars.registerPartial("recipeDetailsPartials", document.getElementById("recipe-details-partial").innerHTML)
	Handlebars.registerHelper("displayIngredient", function(ingredient) {
		return new Handlebars.SafeString("<li name='ingredientsList'>" + "ingredient" + "</li")
	})
}

function initSetup() {
	var recipeForm = document.getElementById("recipe-form-template").innerHTML
	var formTemplate = Handlebars.compile(recipeForm)
	var html = document.getElementsByTagName("main")[0].innerHTML = formTemplate({"Submit": "createRecipe()"})
}

function createRecipe() {
	var recipe = gatherRecipeInfo()

	var recipeScriptTemplate = document.getElementById("recipe-template").innerHTML
	var recipeTemplate = Handlebars.compile(recipeScriptTemplate)
	document.getElementById("main").innerHTML = recipeTemplate(recipe)
}

function gatherRecipeInfo() {
	var name = document.getElementById("name").value
	var description = document.getElementById("description").value
	var ingredientsNodes = document.getElementsByName("ingredients")

	var ingredients = []

	for (i = 0; i < ingredientsNodes.length; i++) {
		if (ingredientsNodes[i].value !== "") {
			ingredients.push(ingredientsNodes[i].value)
		}
	}

	var completeRecipe = {name, description, ingredients}
	return(completeRecipe)
}
