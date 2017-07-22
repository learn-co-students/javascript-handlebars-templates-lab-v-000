function initForm() {
	let formTemp = document.getElementById("recipe-form-template").innerHTML
	let temp = Handlebars.compile(formTemp)

	document.getElementsByTagName("main")[0].innerHTML = temp({ 'submitAction': 'createRecipe()' })
}

function createRecipe() {
	let name = document.getElementById("name").value
	let description = document.getElementById("description").value
	let ingredientsCollection = document.getElementsByName("ingredients")
	let ingredients = []

	for (let i = 0; i < ingredientsCollection.length; i++) {
		if (ingredientsCollection[i].value !== '') {
			ingredients.push(ingredientsCollection[i].value)
		}
	}

	let recipe = { name, description, ingredients }

	let recipeTemp = document.getElementById("recipe-template").innerHTML
	let template = Handlebars.compile(recipeTemp)
	document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
	let name = document.getElementById("nameHeader").innerText // grabs text, NOT all HTML
	let description = document.getElementById("recipeDescription").innerText
	let ingredientsCollection = document.getElementsByName("ingredientsList")
	let ingredients = []

	for (let i = 0; i < ingredientsCollection.length; i++) {
		ingredients.push(ingredientsCollection[i].innerText)
	}

	let recipe = { name, description, ingredients, submitAction: 'createRecipe()' }
	let recipeFormTemp = document.getElementById("recipe-form-template").innerHTML
	let template = Handlebars.compile(recipeFormTemp)
	document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
	createRecipe()
}

function init() {
  handlebarsSetup()
  initForm()
}

function handlebarsSetup() {
	Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
