function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="recipeIngredients">' + ingredient + '</li>')
  });

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML = formTemplate({'formAction': 'createRecipe()'});
}

function createRecipe(){
	var name = document.getElementById("name").value;
	var description = document.getElementById("description").value;
	var ingredientsFields = document.getElementsByName("ingredients");
	var ingredients = [];
	for(var i=0;i<ingredientsFields.length;i++) {
    ingredients.push(ingredientsFields[i].innerText)
  }

	var recipe = {name, description, ingredients};

	var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

	document.getElementsByTagName("main")[0].innerHTML = recipeTemplate(recipe);
}

function displayEditForm(){
	var name = document.getElementById("recipeName").innerText;
	var description = document.getElementById("recipeDescription").innerText;
	var ingredientsFields = document.getElementsByName("recipeIngredients");
	var ingredients = [];
	for(var i=0;i<ingredientsFields.length;i++) {
    ingredients.push(ingredientsFields[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'};

  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate(recipe);
}

function updateRecipe(){
	var name = document.getElementById("name").value;
	var description = document.getElementById("description").value;
	var ingredientsFields = document.getElementsByName("ingredients");
	var ingredients = [];
	for(var i=0;i<ingredientsFields.length;i++) {
    ingredients.push(ingredientsFields[i].innerText)
  }

	var recipe = {name, description, ingredients};

	var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

	document.getElementsByTagName("main")[0].innerHTML = recipeTemplate(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
