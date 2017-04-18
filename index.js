function initForm() {

  	var form = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  	document.getElementById("main").innerHTML += form({ingredients: ["", "", "", "", ""]});

}

function createRecipeObject(){
	var name = document.getElementsByName("name").value;
	var description = document.getElementsByName("description").value;
	var ingredients = Array.prototype.map.call(document.getElementsByName("ingredients"), function(ingredients){return ingredients.value});
	return {name, description, ingredients}

}

function createRecipe(){
	var recipe = createRecipeObject();
	var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
	document.getElementById("main").innerHTML += template(recipe);
}

function displayEditForm(){
	var name = document.getElementById("recipeName").innerHTML;
	var description = document.getElementById("recipeDescription").innerHTML;
	var ingredients = Array.prototype.map.call(document.getElementsByClassName("recipeIngredients"), function(ingredients){return ingredients.innerHTML});
	var recipe = {name: name, description: description, ingredients: ingredients}
	var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
	document.getElementById("showRecipe").innerHTML = template(recipe);
}

function updateRecipe(){
	var recipe = createRecipeObject();
	var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
	document.getElementById("showRecipe").innerHTML += template(recipe);

}

function handlebarsSetup(){

	Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
	Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
	Handlebars.registerHelper('displayIngredient', function(ingredient) {
    	return new Handlebars.SafeString('<p class="recipeIngredients">' + ingredient + '</p>')
  	});
}

function init(){
	handlebarsSetup();
	initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
