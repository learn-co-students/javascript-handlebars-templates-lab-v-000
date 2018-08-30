function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', (ingredient) => {
    return new Handlebars.SafeString(
	    '<ol>'+ingredient.value+'</ol>'
	    );
  });
  
  var formInitializer = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML); 
  document.getElementById("main").innerHTML = formInitializer({'createRecipe':'createRecipe()'}); 

}

function createRecipe() {
	
	var context = {
		name: document.getElementById("name").value,
		description: document.getElementById("description").value,
		ingredients: document.getElementsByName('ingredients')
	}
	
	var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
	document.getElementById('main').innerHTML = template(context);

}

function displayEditForm() {
	debugger
  var context = {
	  'createRecipe': 'updateRecipe()',
	  name: document.getElementById('recipe-name').innerHTML,
	  description: document.getElementById('recipe-description').innerHTML,
	  ingredients: document.getElementsByTagName('ol')
  }

  var editForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = editForm(context);
}

function updateRecipe() {
	createRecipe()
}

	document.addEventListener( "DOMContentLoaded", function(event) { 
		init() 
	})