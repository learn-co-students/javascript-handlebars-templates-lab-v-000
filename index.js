function init() {
	Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  	var form = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  	document.getElementById("main").innerHTML += form({ingredients: ["", "", "", "", ""]});
  	Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  	Handlebars.registerHelper('displayIngredient', function(ingredient){
  		if (ingredient != ""){
  			return new Handlebars.SafeString('<p class="recipeIngredients">' + ingredient + '</p>')
  		}
  		});
}

function createRecipeObject(){
	var name = document.getElementsByName("name")[0].value;
	var description = document.getElementsByName("description")[0].value;
	var ingredients = Array.prototype.map.call(document.getElementsByName("ingredients"), function(ing){return ing.value});
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
	var ingredients = Array.prototype.map.call(document.getElementsByClassName("recipeIngredients"), function(ing){return ing.innerHTML})
	var recipe = {name: name, description: description, ingredients: ingredients}
	var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
	document.getElementById("showRecipe").innerHTML = template(recipe);
}

function updateRecipe(){
	var recipe = createRecipeObject();
	var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
	document.getElementById("showRecipe").innerHTML += template(recipe);
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})